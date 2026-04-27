# 📚 MEAN STACK (MongoDB + Express + Angular + Node.js)

## 📌 Project Overview
This is a full **MEAN stack (MongoDB, Express, AngularJS, Node.js)** application built as part of a beginner learning module.

The application was performed for a Book management app which allows users to perform CRUD operations (Create, Read, Delete) on books using an AngularJS frontend connected to a Node.js/Express API and MongoDB database.
It demonstrates how a frontend interface interacts with a backend server and a database. Users can add books, view them in a list, and delete>

---

## 🏗️ How the Application Works
- The user interacts with the interface (form and table)
- The frontend sends requests to the backend server
- The server processes the request using Express
- Data is stored or retrieved from MongoDB
- The updated result is displayed back on the interface

---

## 🛠️ Technologies Used

- **MongoDB** – NoSQL database for storing book data  
- **Express.js** – Backend framework for handling API requests  
- **Node.js** – Server-side runtime environment  
- **AngularJS** – Frontend framework for UI interaction  
- **Mongoose** – ODM for MongoDB communication

---

## 📁 Project Structure
```
Books/
├── server.js # Main server file
├── apps/
│ ├── routes.js # API routes
│ └── models/
│ └── book.js # Book schema
├── public/
│ └── index.html # Frontend interface
├── screenshots/
├── package.json
```

---

## 🚀 Features
- Add a new book using a form
- Display all books in a table
- Delete a book from the list
- Store and retrieve data from MongoDB
- Simple and clean user interface

---

## 📸 Screenshots

### Application Interface
![Book App List](./screenshots/book-app-get-running.png)

### Add Book
![Add Book](./screenshots/book-app-post.png)

### Delete Book / Updated List
![Delete Book](./screenshots/book-app-delete.png)

---

## 🌐 API Functionality
- GET /book → Retrieves all books from MongoDB and displays them in the UI
- POST /book → Adds a new book when the user submits the form
- DELETE /book/:isbn → Removes a book when the delete button is clicked

---

## ▶️ How to Run the Project
### 1. Start MongoDB
sudo systemctl start mongod

### 2. Install dependencies
npm install

### 3. Run the application
node server.js

### 4. Open in browser
http://localhost:3300

---

## 🧠 What I Learned
- How to structure a full-stack application
- How to create and use API routes with Express
- How to connect Node.js to MongoDB using Mongoose
- How frontend and backend communicate using HTTP requests
- How to implement basic CRUD operations




