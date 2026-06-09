require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Database configuration directly from process.env
const dbConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT),
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
  connectionTimeoutMillis: 5000,
};

let pool = null;

// Connect to PostgreSQL with retry logic (essential for Docker Compose startup order)
async function connectWithRetry(retries = 10, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Connecting to database (attempt ${i + 1}/${retries})...`);
      pool = new Pool(dbConfig);
      
      // Test the connection
      await pool.query('SELECT NOW()');
      console.log('Successfully connected to PostgreSQL database.');
      
      // Create schema tables if they don't exist
      await initializeDatabase();
      return;
    } catch (err) {
      console.error(`Database connection failed: ${err.message}`);
      if (pool) {
        await pool.end();
      }
      if (i < retries - 1) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }
  console.error('Could not connect to PostgreSQL. Backend will run in fallback mock mode.');
  pool = null;
}

// Database schema initialization
async function initializeDatabase() {
  if (!pool) return;
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      username VARCHAR(100) PRIMARY KEY,
      password VARCHAR(255) NOT NULL,
      profile JSONB NOT NULL,
      stats JSONB NOT NULL,
      unlocked_exams JSONB NOT NULL,
      gatekeeper_passed BOOLEAN NOT NULL DEFAULT FALSE
    );
  `;
  const createRequestsTableQuery = `
    CREATE TABLE IF NOT EXISTS key_requests (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      exam_id VARCHAR(100) NOT NULL,
      score INTEGER NOT NULL,
      requested_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `;
  const createAnswerTokensTable = `
    CREATE TABLE IF NOT EXISTS answer_tokens (
      token VARCHAR(128) PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      exam_id VARCHAR(100) NOT NULL,
      expires_at TIMESTAMP NOT NULL,
      attempts INTEGER NOT NULL DEFAULT 0,
      max_attempts INTEGER NOT NULL DEFAULT 3,
      blocked BOOLEAN NOT NULL DEFAULT FALSE,
      exit_flag BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `;
  await pool.query(createUsersTableQuery);
  await pool.query(createRequestsTableQuery);
  await pool.query(createAnswerTokensTable);
  console.log('Database schema checked and initialized.');
}

// In-memory fallback store for tokens when DB is offline
const tokenStore = new Map();

function generateToken() {
  return crypto.randomBytes(24).toString('hex');
}

async function createUnlockToken(username, examId, durationMinutes = 5) {
  const token = generateToken();
  const expiresAt = new Date(Date.now() + durationMinutes * 60 * 1000);
  if (pool) {
    const insert = `
      INSERT INTO answer_tokens (token, username, exam_id, expires_at, attempts, max_attempts, blocked)
      VALUES ($1, $2, $3, $4, 0, 3, FALSE)
    `;
    await pool.query(insert, [token, username, examId, expiresAt]);
  } else {
    tokenStore.set(token, { token, username, exam_id: examId, expires_at: expiresAt, attempts: 0, max_attempts: 3, blocked: false, exit_flag: false, created_at: new Date() });
  }
  return { token, expiresAt };
}

async function getTokenRecord(token) {
  if (pool) {
    const q = `SELECT token, username, exam_id AS "examId", expires_at AS "expiresAt", attempts, max_attempts AS "maxAttempts", blocked, exit_flag AS "exitFlag" FROM answer_tokens WHERE token = $1`;
    const r = await pool.query(q, [token]);
    if (r.rows.length === 0) return null;
    return {
      token: r.rows[0].token,
      username: r.rows[0].username,
      examId: r.rows[0].examId,
      expiresAt: r.rows[0].expiresAt,
      attempts: r.rows[0].attempts,
      maxAttempts: r.rows[0].maxAttempts,
      blocked: r.rows[0].blocked,
      exitFlag: r.rows[0].exitFlag
    };
  }
  const rec = tokenStore.get(token);
  if (!rec) return null;
  return {
    token: rec.token,
    username: rec.username,
    examId: rec.exam_id,
    expiresAt: rec.expires_at,
    attempts: rec.attempts,
    maxAttempts: rec.max_attempts,
    blocked: rec.blocked,
    exitFlag: rec.exit_flag
  };
}

async function markTokenUsed(token) {
  if (pool) {
    await pool.query('UPDATE answer_tokens SET attempts = attempts + 1 WHERE token = $1', [token]);
  } else {
    const rec = tokenStore.get(token);
    if (rec) rec.attempts = (rec.attempts || 0) + 1;
  }
}

async function markTokenLeft(token) {
  if (pool) {
    await pool.query('UPDATE answer_tokens SET exit_flag = TRUE WHERE token = $1', [token]);
  } else {
    const rec = tokenStore.get(token);
    if (rec) {
      rec.exit_flag = true;
    }
  }
}

async function incrementAttempt(token) {
  if (pool) {
    await pool.query('UPDATE answer_tokens SET attempts = attempts + 1 WHERE token = $1 RETURNING attempts, max_attempts, attempts > max_attempts AS over', [token]);
    const r = await pool.query('SELECT attempts, max_attempts, blocked FROM answer_tokens WHERE token = $1', [token]);
    if (r.rows.length === 0) return null;
    return { attempts: r.rows[0].attempts, maxAttempts: r.rows[0].max_attempts, blocked: r.rows[0].blocked };
  }
  const rec = tokenStore.get(token);
  if (!rec) return null;
  rec.attempts = (rec.attempts || 0) + 1;
  return { attempts: rec.attempts, maxAttempts: rec.max_attempts, blocked: rec.blocked };
}

async function blockToken(token) {
  if (pool) {
    await pool.query('UPDATE answer_tokens SET blocked = TRUE WHERE token = $1', [token]);
  } else {
    const rec = tokenStore.get(token);
    if (rec) rec.blocked = true;
  }
}

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', databaseConnected: pool !== null });
});

// Candidate Registration
app.post('/api/register', async (req, res) => {
  const { username, password, profile } = req.body;
  if (!username || !password || !profile) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  const lowercaseUsername = username.trim().toLowerCase();

  try {
    if (!pool) {
      return res.status(503).json({ success: false, message: 'Database offline.' });
    }

    // Check if user already exists
    const checkUser = await pool.query('SELECT username FROM users WHERE username = $1', [lowercaseUsername]);
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ success: false, message: 'Username is already registered.' });
    }

    const emptyStats = { completedExams: {}, totalQuestionsAnswered: 0, attempts: {}, attemptHistory: {}, detailedAttempts: [] };
    const emptyUnlocked = {};
    const gatekeeperPassed = false;

    // Insert new candidate profile
    const insertQuery = `
      INSERT INTO users (username, password, profile, stats, unlocked_exams, gatekeeper_passed)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING username, profile, stats, unlocked_exams AS "unlockedExams", gatekeeper_passed AS "gatekeeperPassed"
    `;
    const result = await pool.query(insertQuery, [
      lowercaseUsername,
      password.trim(),
      JSON.stringify(profile),
      JSON.stringify(emptyStats),
      JSON.stringify(emptyUnlocked),
      gatekeeperPassed
    ]);

    res.json({ success: true, user: result.rows[0] });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Candidate Authentication Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing username or password.' });
  }

  const lowercaseUsername = username.trim().toLowerCase();

  try {
    if (!pool) {
      return res.status(503).json({ success: false, message: 'Database offline.' });
    }

    const query = `
      SELECT username, password, profile, stats, unlocked_exams AS "unlockedExams", gatekeeper_passed AS "gatekeeperPassed"
      FROM users WHERE username = $1
    `;
    const result = await pool.query(query, [lowercaseUsername]);

    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or credentials.' });
    }

    const user = result.rows[0];
    if (user.password !== password.trim()) {
      return res.status(401).json({ success: false, message: 'Invalid username or credentials.' });
    }

    // Remove password hash from response
    delete user.password;
    res.json({ success: true, user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Sync Candidate Progress Stats
app.post('/api/sync', async (req, res) => {
  const { username, stats, unlockedExams, gatekeeperPassed } = req.body;
  if (!username) {
    return res.status(400).json({ success: false, message: 'Missing username.' });
  }

  const lowercaseUsername = username.trim().toLowerCase();

  try {
    if (!pool) {
      return res.status(503).json({ success: false, message: 'Database offline.' });
    }

    const syncQuery = `
      UPDATE users
      SET stats = $2, unlocked_exams = $3, gatekeeper_passed = $4
      WHERE username = $1
    `;
    await pool.query(syncQuery, [
      lowercaseUsername,
      JSON.stringify(stats || {}),
      JSON.stringify(unlockedExams || {}),
      !!gatekeeperPassed
    ]);

    res.json({ success: true });
  } catch (err) {
    console.error('Sync error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Request Answer Key & Explanations Endpoint
app.post('/api/request-key', async (req, res) => {
  const { name, email, examId, score } = req.body;
  if (!name || !email || !examId) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }
  try {
    if (pool) {
      const insertQuery = `
        INSERT INTO key_requests (name, email, exam_id, score)
        VALUES ($1, $2, $3, $4)
      `;
      await pool.query(insertQuery, [name.trim(), email.trim(), examId, score]);
    } else {
      console.log(`[MOCK DATABASE] Key requested for: Name: ${name}, Email: ${email}, Exam: ${examId}, Score: ${score}%`);
    }
    res.json({ success: true, message: 'Request submitted successfully.' });
  } catch (err) {
    console.error('Request key error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Unlock an answer sheet for a short time window (single-use)
app.post('/api/unlock-answer', async (req, res) => {
  const { username, examId, durationMinutes } = req.body;
  if (!username || !examId) return res.status(400).json({ success: false, message: 'Missing username or examId.' });

  try {
    const { token, expiresAt } = await createUnlockToken(username.trim().toLowerCase(), examId, parseInt(durationMinutes) || 5);
    res.json({ success: true, token, expiresAt });
  } catch (err) {
    console.error('Unlock error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Return the disclaimer/rules that must be accepted before viewing
app.get('/api/answer-disclaimer', (req, res) => {
  const disclaimer = {
    title: 'Answer Sheet Access Rules',
    rules: [
      'You may view the answer sheet for a limited time only (default 5 minutes).',
      'You must accept this disclaimer before viewing. By accepting you acknowledge you will not record, copy, or share the answers.',
      'You are allowed up to 3 view attempts. After the 3rd attempt access will be blocked for security reasons.',
      'If you leave, navigate away, or close the view window/tab while viewing the answers, access may be revoked.',
      'Do not take screenshots or share content — violations may result in access restrictions.'
    ]
  };
  res.json({ success: true, disclaimer });
});

// Token status endpoint — useful to show remaining attempts and expiry
app.get('/api/token-status', async (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ success: false, message: 'Missing token.' });
  try {
    const rec = await getTokenRecord(token);
    if (!rec) return res.status(404).json({ success: false, message: 'Token not found.' });
    const now = new Date();
    const expired = new Date(rec.expiresAt) < now;
    const remainingAttempts = Math.max(0, (rec.maxAttempts || 3) - (rec.attempts || 0));
    res.json({ success: true, status: { expired, blocked: !!rec.blocked, left: !!rec.exitFlag, attempts: rec.attempts || 0, maxAttempts: rec.maxAttempts || 3, remainingAttempts, expiresAt: rec.expiresAt } });
  } catch (err) {
    console.error('Token status error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Report focus/tab loss during viewing - counts as an attempt but does not auto-block
app.post('/api/focus-lost', async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ success: false, message: 'Missing token.' });
  try {
    console.warn('[SECURITY] Violation: Window focus lost or tab switched during detailed review. Recording event.');
    const info = await incrementAttempt(token);
    if (!info) return res.status(404).json({ success: false, message: 'Token not found.' });
    const { attempts, maxAttempts } = info;
    const remaining = Math.max(0, maxAttempts - attempts);
    if (attempts > maxAttempts) {
      return res.json({ success: true, message: 'Maximum warnings exceeded; continue carefully.', attempts, maxAttempts, remaining: 0 });
    }
    return res.json({ success: true, message: 'Focus loss recorded.', attempts, maxAttempts, remaining });
  } catch (err) {
    console.error('Focus-lost error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Reset/unblock a token. Optional penaltyMinutes to delay availability.
app.post('/api/reset-token', async (req, res) => {
  const { token, penaltyMinutes } = req.body;
  if (!token) return res.status(400).json({ success: false, message: 'Missing token.' });
  try {
    const rec = await getTokenRecord(token);
    if (!rec) return res.status(404).json({ success: false, message: 'Token not found.' });

    const now = new Date();
    let newExpires = rec.expiresAt ? new Date(rec.expiresAt) : new Date(now.getTime() + 5 * 60 * 1000);
    if (typeof penaltyMinutes === 'number' && penaltyMinutes > 0) {
      // set a penalty window during which token remains blocked, then extend expiry accordingly
      newExpires = new Date(now.getTime() + (penaltyMinutes * 60 * 1000));
    }

    if (pool) {
      const q = `UPDATE answer_tokens SET blocked = FALSE, exit_flag = FALSE, attempts = 0, expires_at = $2 WHERE token = $1`;
      await pool.query(q, [token, newExpires]);
    } else {
      const recMem = tokenStore.get(token);
      if (!recMem) return res.status(404).json({ success: false, message: 'Token not found.' });
      recMem.blocked = false;
      recMem.exit_flag = false;
      recMem.attempts = 0;
      recMem.expires_at = newExpires;
      tokenStore.set(token, recMem);
    }

    return res.json({ success: true, message: 'Token reset/unblocked.', expiresAt: newExpires });
  } catch (err) {
    console.error('Reset token error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// View the answer sheet using a single-use, time-limited token
app.get('/api/answer-sheet', async (req, res) => {
  const { token } = req.query;
  const accepted = req.query.accepted === 'true';
  if (!token) return res.status(400).json({ success: false, message: 'Missing token.' });

  try {
    const rec = await getTokenRecord(token);
    if (!rec) return res.status(404).json({ success: false, message: 'Invalid or expired token.' });

    const now = new Date();
    if (new Date(rec.expiresAt) < now) return res.status(403).json({ success: false, message: 'Token has expired.' });
    if (rec.blocked) return res.status(403).json({ success: false, message: 'Token is blocked.' });

    if (!accepted) return res.status(400).json({ success: false, message: 'You must accept the disclaimer before viewing.' });

    // Increment attempt count and check limits
    const attemptInfo = await incrementAttempt(token);
    const attempts = attemptInfo ? attemptInfo.attempts : (rec.attempts || 0);
    const maxAttempts = attemptInfo ? attemptInfo.maxAttempts : (rec.maxAttempts || 3);
    const remaining = Math.max(0, maxAttempts - attempts);
    if (attempts > maxAttempts) {
      await blockToken(token);
      return res.status(403).json({ success: false, message: 'Maximum view attempts exceeded; token blocked.', attempts, maxAttempts, remaining: 0 });
    }

    // TODO: Replace with real answer content retrieval for examId
    const answers = { examId: rec.examId, answers: '<<REDACTED ANSWER SHEET CONTENT>>' };
    res.json({ success: true, answers, attempts, maxAttempts, remaining });
  } catch (err) {
    console.error('Answer sheet error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Mark that the user left/exited the view before or during the window
app.post('/api/answer-left', async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ success: false, message: 'Missing token.' });

  try {
    await markTokenLeft(token);
    res.json({ success: true });
  } catch (err) {
    console.error('Answer left error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Fetch all registered candidates (to populate leaderboard standings)
app.get('/api/users', async (req, res) => {
  try {
    if (!pool) {
      return res.status(503).json({ success: false, message: 'Database offline.' });
    }

    const query = `
      SELECT username, profile, stats, unlocked_exams AS "unlockedExams", gatekeeper_passed AS "gatekeeperPassed"
      FROM users
    `;
    const result = await pool.query(query);

    res.json({ success: true, users: result.rows });
  } catch (err) {
    console.error('Fetch users error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Serve static assets from root directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname));

// Fallback to serving simulator.html for client side route loading
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'simulator.html'));
});

// Start listening and database connectivity
app.listen(PORT, async () => {
  console.log(`CLF-C02 Exam Sandbox Node.js Backend listening on port ${PORT}`);
  await connectWithRetry();
});
