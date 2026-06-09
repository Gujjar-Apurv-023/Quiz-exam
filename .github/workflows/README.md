# GitHub Actions - AWS ECR Deployment Guide

## Setup Instructions

### 1. Create AWS ECR Repositories

```bash
# Create ECR repositories
aws ecr create-repository --repository-name exam-backend --region us-east-1
aws ecr create-repository --repository-name exam-frontend --region us-east-1
```

### 2. Create IAM User for GitHub Actions

1. Go to AWS IAM Console
2. Create new user: `github-actions-user`
3. Attach policy: `AmazonEC2ContainerRegistryPowerUser`

### 3. Generate Access Keys

1. In IAM, select the user
2. Go to "Security Credentials" tab
3. Create new Access Key
4. Save the Access Key ID and Secret Access Key

### 4. Add Secrets to GitHub Repository

1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Add these secrets:

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | Your AWS Access Key ID |
| `AWS_SECRET_ACCESS_KEY` | Your AWS Secret Access Key |
| `AWS_REGION` | `us-east-1` (or your region) |

### 5. How Workflows Work

**deploy-backend.yml**
- Triggers: Push to `main` branch
- Builds: `backend/Dockerfile`
- Pushes to: `exam-backend:latest` in AWS ECR

**deploy-frontend.yml**
- Triggers: Push to `main` branch  
- Builds: `frontend/Dockerfile`
- Pushes to: `exam-frontend:latest` in AWS ECR

### 6. Manual Test

Push to main branch:
```bash
git push origin main
```

Check GitHub Actions tab to see workflows running.

### 7. Verify Images in ECR

```bash
# List images
aws ecr describe-images --repository-name exam-backend --region us-east-1
aws ecr describe-images --repository-name exam-frontend --region us-east-1
```

## Workflow Overview

```
Push to main
     ↓
GitHub Actions triggered
     ↓
┌─────────────┬─────────────┐
│   Backend   │   Frontend  │
│   Workflow  │   Workflow  │
└─────────────┴─────────────┘
     ↓              ↓
  Build          Build
  Docker         Docker
     ↓              ↓
  Push to ECR   Push to ECR
```

## Troubleshooting

**Workflow fails with "Access Denied":**
- Check AWS credentials in GitHub Secrets
- Verify IAM user has ECR permissions

**Image not pushing:**
- Verify ECR repository exists
- Check AWS region is correct
- Ensure Docker is installed on runner

**Want to test locally:**
```bash
# Backend
docker build -t exam-backend:latest ./backend

# Frontend
docker build -t exam-frontend:latest -f ./frontend/Dockerfile .
```
