# Project Structure - AWS CLF-C02 Exam Sandbox

## Directory Organization

```
13-AWS-Cloud-Practitioner-Exam/
├── backend/                          # Node.js Express API Server
│   ├── Dockerfile                    # Backend container configuration
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Main Express application
│   ├── unlock_client_snippet.js      # Client unlock logic
│   ├── .env                          # Backend environment variables (local)
│   └── .env.example                  # Environment template
│
├── frontend/                         # Nginx Web Server for Static Assets
│   ├── Dockerfile                    # Frontend container configuration (multi-stage)
│   ├── nginx.conf                    # Nginx server configuration
│   ├── package.json                  # Frontend metadata
│   ├── simulator.html                # Main HTML application (MOVE HERE)
│   ├── exams_data.js                 # Exam data file (MOVE HERE)
│   └── assets/                       # Static assets (MOVE HERE)
│
├── archives/                         # Practice Exam Documents (Reference Only)
│   ├── 00-AWS-Certified-Cloud-Practitioner-CLF-C02-Exam-Guide.md
│   ├── 01-Practice-Exam-1.md
│   ├── 02-Practice-Exam-2.md
│   └── ... (all practice exam files)
│
├── docker-compose.yml                # Multi-container orchestration
├── README.md                         # Original project documentation
└── PROJECT_STRUCTURE.md             # This file
```

## Container Services

### 1. PostgreSQL Database (postgres)
- **Image**: postgres:16-alpine
- **Port**: 5432 (configurable via `POSTGRES_PORT`)
- **Volume**: `postgres_data` - Persistent database storage
- **Network**: exam-network (internal)

### 2. Backend API (backend)
- **Build Context**: `./backend/`
- **Port**: 8000 (configurable via `BACKEND_PORT`)
- **Language**: Node.js (Alpine)
- **Dependencies**: Express, PostgreSQL driver, CORS, dotenv
- **Requires**: PostgreSQL service
- **Environment**: Production

### 3. Frontend Web (frontend)
- **Build Context**: `./frontend/`
- **Port**: 3000 (configurable via `FRONTEND_PORT`)
- **Server**: Nginx Alpine
- **Content**: Static HTML, JavaScript, CSS, and assets
- **Requires**: Backend service for API calls
- **Health Check**: `/health` endpoint

## Running the Application

### Using Docker Compose (Recommended)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Clean up volumes
docker-compose down -v
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PGUSER=exam_user
PGPASSWORD=exam_password
PGDATABASE=exam_db
POSTGRES_PORT=5432
BACKEND_PORT=8000
FRONTEND_PORT=3000
```

## Service Communication

```
┌─────────────────────────────────────────────┐
│          Client Browser (localhost)         │
└──────────────┬──────────────────────────────┘
               │
               ▼ (port 3000)
        ┌─────────────────┐
        │  Frontend Nginx │ ◄─── Serves simulator.html, assets
        │   (Port 80)     │
        └────────┬────────┘
                 │
      ┌──────────┴──────────────┐
      │                         │
      ▼ (port 8000)             │ (static files)
┌──────────────┐                │
│ Backend API  │                │
│  (Express)   │                │
└──────┬───────┘                │
       │                        │
       ▼ (internal)             │
┌──────────────────┐            │
│  PostgreSQL DB   │            │
│  (Port 5432)     │            │
└──────────────────┘            │
                                │
                    (served directly)
```

## Changes from Original Structure

### Moved Files
- ✅ `simulator.html` → `frontend/simulator.html`
- ✅ `exams_data.js` → `frontend/exams_data.js`
- ✅ `assets/` → `frontend/assets/`

### Archived Files
- ✅ All `*-Practice-Exam-*.md` files → `archives/`
- ✅ Exam guide → `archives/`

### New Files
- ✅ `frontend/Dockerfile` - Multi-stage Nginx build
- ✅ `frontend/nginx.conf` - Web server configuration
- ✅ `frontend/package.json` - Frontend metadata
- ✅ `backend/Dockerfile` - Updated for backend-only context
- ✅ `docker-compose.yml` - Updated with 3 services
- ✅ `PROJECT_STRUCTURE.md` - This documentation

## Next Steps

1. **Move static files to frontend**:
   ```bash
   # These files need to be moved to frontend/ directory:
   mv simulator.html frontend/
   mv exams_data.js frontend/
   mv assets/ frontend/
   ```

2. **Move practice exams to archives**:
   ```bash
   # Move all practice exam markdown files
   mv *.md archives/
   ```

3. **Update backend environment**:
   - Ensure `backend/.env` is configured with database credentials
   - Use `backend/.env.example` as a template

4. **Test the build**:
   ```bash
   docker-compose build
   docker-compose up -d
   ```

5. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Database: localhost:5432

## Docker Commands Reference

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View service status
docker-compose ps

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres

# Execute commands in container
docker-compose exec backend npm list
docker-compose exec postgres psql -U exam_user -d exam_db

# Stop services
docker-compose stop

# Remove services and volumes
docker-compose down -v
```

---

**Last Updated**: 2024  
**Architecture**: 3-Tier (Frontend, Backend API, Database)  
**Container Orchestration**: Docker Compose
