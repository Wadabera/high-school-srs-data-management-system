# Student Registration System (SRS) Migration

A modern full-stack web application using React, NestJS, and MongoDB Atlas.

## Technologies Used

- **Frontend:** React (Vite), React Router, Lucide Icons, Modern Vanilla CSS (CSS variables, glassmorphism, responsive design)
- **Backend:** NestJS, TypeScript, Mongoose, Passport (JWT Auth), bcryptjs
- **Database:** MongoDB Atlas (Cloud)

## Project Structure

- `/srs-backend` - The NestJS backend application
- `/srs-frontend` - The React frontend application

## Environment Variables

Create `.env` file in `srs-backend/`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_EXPIRY=1d
JWT_REFRESH_SECRET=your-refresh-secret-key-min-32-chars
JWT_REFRESH_EXPIRY=7d
PORT=5000
```

## How to Run the Application

```bash
# Terminal 1 - Backend
cd srs-backend
npm install
npm run start:dev

# Terminal 2 - Frontend
cd srs-frontend
npm install
npm run dev
```

Backend: `http://localhost:5000`
Frontend: `http://localhost:5173`

## Features Completed

### Authentication
- JWT-based login with access tokens
- Refresh token support for session management
- User registration for students, teachers, and directors
- Role-based access control
- Password hashing with bcryptjs

### Security
- Helmet for XSS protection
- Input validation with class-validator
- Environment variable validation
- MongoDB connection retry mechanism

### UI/UX
- Responsive design (320px, 480px, 768px, 1024px breakpoints)
- Glassmorphism effects
- Modern brutal-style cards
- Form validation and error handling
- Registration and forgot password pages