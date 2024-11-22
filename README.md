# User Authentication API

# Description

This project implements a simple user authentication system using Node.js, Express, and MongoDB. It follows the MVC (Model-View-Controller) architecture and provides basic functionality for user registration, login, and profile retrieval with JWT (JSON Web Token) authentication.

# Features

User Registration: Allows users to register with a username, email, and password.
User Login: Authenticates users with their email and password, returning a JWT.
User Profile: Retrieves the user's profile information when provided with a valid JWT.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
Authentication: JWT (JSON Web Token)
Password Hashing: bcryptjs

# Installation
Clone the repository:


git clone https://github.com/yourusername/user-authentication-api.git
cd user-authentication-api
Install dependencies:


npm install
Set up the environment variables: Create a .env file in the root of the project and add the following:

env

Add the "MONGO_URL" and "JWT_SECRET" here.

Start the server:

npm start
The server will start on port 6000 by default. If you want to use a different port, you can specify it in the .env file.

#API Endpoints

1. Root Route:

Endpoint: GET /

Description: Checking the initial url with GET request

Response:

 "Welcome to the User Authentication API!" 

2. User Registration

Endpoint: POST /api/auth/register

Description: Registers a new user.

Request Body:


{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}

Response:

Success: { "message": "User registered successfully" }
Error: { "message": "User already exists" }

3. User Login

Endpoint: POST /api/auth/login

Description: Logs in a user and returns a JWT token.

Request Body:


{
  "email": "newuser@example.com",
  "password": "password123"
}

Response:

{
  "token": "your_jwt_token_here"
}

4. Get User Profile

Endpoint: GET /api/user/profile

Description: Retrieves the authenticated user's profile.

Headers:

Authorization: Bearer <your_jwt_token_here>
Response:

{
  "username": "newuser",
  "email": "newuser@example.com"
}

#Testing with Postman

1. Root Route:

Method: GET
URL: http://localhost:5000/


2. Register User:

Method: POST
URL: http://localhost:5000/api/auth/register
Body (raw, JSON):


{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}

3. Login User:

Method: POST
URL: http://localhost:5000/api/auth/login
Body (raw, JSON):


{
  "email": "newuser@example.com",
  "password": "password123"
}

4. Get User Profile:

Method: GET
URL: http://localhost:5000/api/user/profile
Headers:
Authorization: Bearer <your_jwt_token_here>

#Error Handling

Invalid Token: { "message": "Invalid or expired token" }
User Not Found: { "message": "User not found" }
Server Error: { "message": "Server error" }

#Conclusion
This project provides a basic setup for user authentication with JWT in a Node.js application. You can extend this project by adding more features like email verification, password reset, and more.