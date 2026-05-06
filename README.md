# Student Registration System (SRS) Migration

This project has been successfully migrated from PHP/MySQL to a modern full-stack web application using React, NestJS, and MongoDB.

## Technologies Used

*   **Frontend:** React (Vite), React Router, Lucide Icons, Modern Vanilla CSS (with CSS variables and theming).
*   **Backend:** NestJS, TypeScript, Mongoose, Passport (JWT Auth), Bcrypt.
*   **Database:** MongoDB Atlas (Cloud).

## Project Structure

*   `/srs-backend` - The NestJS backend application.
*   `/srs-frontend` - The React frontend application.

## How to Run the Application

You will need two separate terminal windows to run both the frontend and the backend simultaneously.

### 1. Start the Backend Server
```bash
cd srs-backend
npm install
npm run start:dev
```
The backend API will be running on `http://localhost:5000`.

### 2. Start the Frontend Server
```bash
cd srs-frontend
npm install
npm run dev
```
The React frontend will be running on `http://localhost:5173`. Open this URL in your browser.

## Features Completed
✅ **Authentication:** JWT-based login with role-based redirection.
✅ **Modern UI/UX:** A rich, aesthetic, and responsive design utilizing glassmorphism, micro-animations, and dynamic layouts.
✅ **MongoDB Integration:** Full mapping of all previous relational MySQL tables into NoSQL collections.
✅ **Modular Backend:** Clean architecture utilizing Controllers, Services, and Modules in NestJS.
✅ **Protected Routes:** Secured frontend routing via AuthContext to prevent unauthorized access.

### Next Steps for the User
* To continue building out the specific sub-pages (e.g., Manage Marks, Create Columns), simply follow the pattern established in the `pages` directory. The NestJS backend APIs are already fully scaffolded to handle the data for these pages!
