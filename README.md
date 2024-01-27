# web_task
This is a simple web application built using Flask for the backend and React for the frontend. It provides user registration, profile management, and password reset functionalities.

Description
The project consists of two main parts:

Backend (Flask):
The backend is built using Flask, a Python web framework.
It provides RESTful API endpoints for user registration, profile management, and password reset.
The backend uses SQLAlchemy for database management and Flask-Mail for sending emails.

Frontend (React):
The frontend is built using React, a JavaScript library for building user interfaces.
It includes components for user registration, profile viewing, and password reset.
Installation
To run this application locally, follow these steps:

Clone the Repository:
git clone https://github.com/Manjunat002/web_task.git
cd web_task

Install Dependencies:

Navigate to the frontend directory and install frontend dependencies:
 cd my-react-app
 npm install

Navigate to the backend directory and install backend dependencies:
 cd ../backend
 pip install -r requirements.txt

Database Setup:
 python
 from backend import db
 db.create_all()
 exit()

Start the Backend Server:
 python app.py
 
Start the Frontend Server:
In a new terminal, navigate to the frontend directory and start the React frontend server:
 npm start
 
Access the Application:
 Open your web browser and go to http://localhost:3000 to access the application.
 
Usage:
Once the application is running, you can register a new user, view and edit user profiles, and reset passwords if needed.
Use the provided frontend components to interact with the backend API endpoints.

Contributing:
Contributions are welcome! Please feel free to submit pull requests or open issues if you encounter any bugs or have suggestions for improvements.
