# Setup Checklist - Project Reorganization

## ✅ Completed

- [x] Created `frontend/` directory structure
- [x] Created `archives/` directory structure
- [x] Created `frontend/Dockerfile` (Nginx multi-stage build)
- [x] Created `frontend/nginx.conf` (Web server config)
- [x] Created `frontend/package.json` (Frontend metadata)
- [x] Updated `backend/Dockerfile` (Backend-only, self-contained)
- [x] Updated `docker-compose.yml` (3-service orchestration)
- [x] Created `PROJECT_STRUCTURE.md` (Documentation)
- [x] Created `archives/README.md` (Instructions for archived files)

## 📋 TODO - Manual File Movements

### Files to Move to `frontend/` Directory

```bash
# Navigate to root directory
cd 13-AWS-Cloud-Practitioner-Exam/

# Move static frontend files
mv simulator.html frontend/
mv exams_data.js frontend/
mv assets/ frontend/
```

### Files to Move to `archives/` Directory

```bash
# Move all practice exam markdown files
mv 00-AWS-Certified-Cloud-Practitioner-CLF-C02-Exam-Guide.md archives/
mv 0[1-9]-Practice-Exam-*.md archives/
mv [1-2][0-4]-Practice-Exam-*.md archives/
```

Or use a single command:
```bash
cd 13-AWS-Cloud-Practitioner-Exam/
mv [0-2][0-9]-Practice-Exam-*.md 00-*.md archives/ 2>/dev/null || echo "Move completed or no match"
```

## 🚀 Testing the Setup

After completing the file movements:

1. **Build all containers**:
   ```bash
   docker-compose build
   ```

2. **Start all services**:
   ```bash
   docker-compose up -d
   ```

3. **Verify services are running**:
   ```bash
   docker-compose ps
   ```

4. **Check logs**:
   ```bash
   docker-compose logs -f
   ```

5. **Test endpoints**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Database Health: Should show in docker-compose logs

6. **Stop services**:
   ```bash
   docker-compose down
   ```

## 📊 Directory Structure After Setup

```
13-AWS-Cloud-Practitioner-Exam/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── unlock_client_snippet.js
│   ├── .env
│   └── .env.example
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   ├── simulator.html          ← MOVE HERE
│   ├── exams_data.js           ← MOVE HERE
│   └── assets/                 ← MOVE HERE
├── archives/
│   ├── README.md
│   ├── 00-AWS-Certified-Cloud-Practitioner-CLF-C02-Exam-Guide.md
│   ├── 01-Practice-Exam-1.md
│   └── ... (all 24 practice exams)
├── docker-compose.yml          ✅ UPDATED
├── README.md
└── PROJECT_STRUCTURE.md        ✅ CREATED
```

## ⚙️ Configuration Notes

### Backend Environment (.env)
```env
PGUSER=exam_user
PGPASSWORD=exam_password
PGHOST=postgres
PGPORT=5432
PGDATABASE=exam_db
PGSSL=false
PORT=8000
NODE_ENV=production
```

### Docker Compose Environment Variables
```env
PGUSER=exam_user
PGPASSWORD=exam_password
PGDATABASE=exam_db
POSTGRES_PORT=5432
BACKEND_PORT=8000
FRONTEND_PORT=3000
```

## 🔍 Verification Commands

After setup:

```bash
# Check frontend assets are served
curl http://localhost:3000/simulator.html

# Check backend API is responding
curl http://localhost:8000/health

# Check database connection
docker-compose exec backend curl http://localhost:8000/health

# View frontend logs
docker-compose logs frontend

# View backend logs
docker-compose logs backend

# View database logs
docker-compose logs postgres
```

---

**Status**: Ready for manual file movements  
**Last Updated**: 2024
