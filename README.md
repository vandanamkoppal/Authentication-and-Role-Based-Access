# Authentication and Role-Based Access
# Authentication and Role-Based Access Control System

A full-stack authentication system with role-based dashboards
built for Code Studio ATS.

## Tech Stack
- Frontend: React 18 + Vite
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)
- Auth: JWT (1 hour expiry)

## Setup Instructions

### Backend
cd backend
npm install
node server.js

### Frontend
cd frontend
npm install
npm run dev

## Test Login Credentials

### Admin
- Email: admin@test.com
- Password: Test123
- Access: Manage all users, activate/deactivate accounts

### Recruiter
- Email: recruiter@test.com
- Password: Test123
- Access: View My Requirements dashboard

### Delivery Manager
- Email: delivery@test.com
- Password: Test123
- Access: View Team Overview dashboard

### Finance / HR Ops
- Email: finance@test.com
- Password: Test123
- Access: Read-only employee data

## Features
- Signup with role selection
- Login with JWT token
- Protected routes per role
- Redirect to 403 if unauthorized
- Logout clears token
- Show username and role in navbar

## Project Structure
backend/
  models/User.js
  routes/auth.js
  middleware/authMiddleware.js
  server.js
  .env
frontend/
  src/
    pages/
    components/
    context/