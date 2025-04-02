# Blog Project

## Introduction
This project is a blogging platform where users can create, like, dislike, and manage blogs. It allows registered users to publish blogs, and the home page displays all blog posts. Each user has a separate section to view their own blogs.

## Project Requirements

### 1. User Functionalities
- Users can sign up and log in.
- Users can create, edit, and delete their own blog posts.
- Users can like and dislike blog posts.
- Users can view all blogs on the home page.
- Users can view only their own blogs in a separate section.
- JWT is used for secure authentication.

### 2. Home Page Functionalities
- Display all blog posts with title, author, date, and likes/dislikes count.
- Each blog post has a "Read More" link to view full details.
- Users can like or dislike blog posts directly from the homepage.

### 3. Blog Detail Page
- Show full blog content along with the author's name and creation date.
- Allow users to like and dislike the blog.
- Users can edit or delete their own blogs.

### 4. Deployment Requirements
- The project must be deployed on **Netlify** or **Vercel**.
- The backend should be hosted using a suitable cloud-based service.
- Environment variables should be managed properly for security.

## Technologies Used
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for Node.js
- **Mongoose** - ODM library for MongoDB
- **EJS** - Template engine for rendering views
- **Nodemon** - Auto-restarts server on changes
- **Dotenv** - Loads environment variables
- **Body-Parser** - Middleware to parse incoming request bodies
- **JSON Web Token (JWT)** - User authentication
- **Netlify/Vercel** - Deployment platforms

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed.

### Steps to Set Up

#### Clone the Repository
```sh
git clone https://github.com/your-repo/blog-project.git
cd blog-project
```

#### Install Dependencies
```sh
npm install
```

#### Set Up Environment Variables
Create a `.env` file in the root directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### Run the Server
```sh
npm start  # OR nodemon server.js
```

## Features & Endpoints

### 1. User Authentication
- **Signup** `(POST /api/auth/register)`
- **Login** `(POST /api/auth/login)`

### 2. Blog Management
- **Create Blog** `(POST /api/blogs)`
- **Edit Blog** `(PUT /api/blogs/:id)`
- **Delete Blog** `(DELETE /api/blogs/:id)`
- **View All Blogs** `(GET /api/blogs)`
- **View User Blogs** `(GET /api/blogs/user/:id)`

### 3. Blog Interactions
- **View Blog Details** `(GET /api/blogs/:id)`
- **Like Blog** `(POST /api/blogs/:id/like)`
- **Dislike Blog** `(POST /api/blogs/:id/dislike)`

## Folder Structure
```
blog-project/
│── server.js        # Main server file
│── config/
│   ├── db.js       # Database connection
│── models/
│   ├── User.js     # User model
│   ├── Blog.js     # Blog model
│── routes/
│   ├── auth.js     # Authentication routes
│   ├── blog.js     # Blog routes
│── middleware/
│   ├── auth.js     # JWT authentication middleware
│── views/
│   ├── home.ejs    # Home page
│   ├── blog.ejs    # Blog detail page
│── public/
│   ├── css/        # Stylesheets
│── .env            # Environment variables
│── package.json    # Project dependencies
```

## Database Schema

### User Model (`models/User.js`)
```js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
```

### Blog Model (`models/Blog.js`)
```js
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);
```

## Deployment Instructions

### Deploying on Netlify or Vercel
1. Sign up on **Netlify** or **Vercel**.
2. Connect your GitHub repository.
3. Set environment variables in the deployment dashboard.
4. Deploy the project.

## Conclusion
This project provides a full-featured blogging platform where users can publish, manage, like, and dislike blogs. The platform is secured with JWT authentication and is deployed on Netlify or Vercel. Additional features like comments, categories, and tags can be added for better organization.

---
**Happy Coding! 🚀**
