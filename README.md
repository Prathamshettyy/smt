Smart Habit Tracker API:

Overview:
The Smart Habit Tracker API is a backend API built using Node.js and Express to help users track, manage, and analyze their daily habits. It provides endpoints to create habits, track progress, and generate reports for habit consistency.

Features:
User Authentication: Register and login with JWT-based authentication.
Habit Management: Create, update, and delete habits.
Track Completion: Mark habits as completed on specific days.
Progress Reports: Generate daily, weekly, and monthly habit progress reports.

Key Endpoints:
POST /register: User registration.
POST /login: User login and JWT token generation.
POST /habits: Create a new habit.
GET /habits: Retrieve all habits.
POST /habits/:id/completed: Mark a habit as completed.
GET /reports: Generate habit completion reports.

Setup & Installation:
Clone the Repository: git clone <repository-url>
Install Dependencies: npm install
Start Server: npm start
API available at http://localhost:3000

Folder Structure:
controllers/: Logic for habits and user authentication.
models/: Database schemas (user, habit).
routes/: API routes for habits and auth.
middleware/: JWT validation.

Testing:
Use Postman to test API endpoints.
Include JWT token in Authorization header:
Authorization: Bearer <JWT-TOKEN>

Conclusion:
The Smart Habit Tracker API helps users stay consistent with their habits.
Flexible and scalable backend for habit tracking.
Future Enhancements: Add reminders, habit streaks, and integrations with third-party apps.

License:
MIT License.

