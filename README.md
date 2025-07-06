
# 🛡️ Secure Notes

A full-stack web app to securely create, edit, and manage personal notes. Built using the **MERN** stack (MongoDB, Express.js, React, Node.js) with authentication, REST APIs, and a modern, responsive UI.

---

## ✨ Features

- 🔐 JWT-based User Authentication (Sign up / Login)
- 📓 Create, Read, Update, and Delete Secure Notes
- 🧑‍💻 User Dashboard showing all notes
- 🎨 Responsive UI with Tailwind CSS and smooth transitions
- ⚙️ RESTful API using Express.js and MongoDB
- 🛡️ Helmet and CORS for basic backend security

---

## 🔧 Tech Stack

**Frontend:** React.js (Vite), Tailwind CSS, React Router, Axios  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, Bcrypt, JWT

---

## 📁 Folder Structure

```
secure-notes/
├── secure-notes-frontend/   → React + Vite (Client)
└── secure-notes-backend/    → Express + MongoDB (Server)
```

---

## 🚀 Getting Started

### 🔙 Backend Setup

```bash
cd secure-notes/secure-notes-backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/secure-notes
JWT_SECRET=your_secure_jwt_secret
```

Run the backend:

```bash
npm run dev
```

---

### 🔜 Frontend Setup

```bash
cd ../secure-notes-frontend
npm install
npm run dev
```

Open: `http://localhost:5173`

---

## 📸 UI Preview

### 🏠 Home Page  
Minimal and distraction-free welcome page with secure messaging focus.

![Home](./screenshots/Screenshot_6-7-2025_103610_localhost.jpeg)

---

### 📝 Sign Up Page  
Register with username, email, and password — clean and centered form.

![Signup](./screenshots/Screenshot_6-7-2025_103626_localhost.jpeg)

---

### 🔐 Login Page  
Secure login interface with sleek dark styling.

![Login](./screenshots/Screenshot_6-7-2025_103635_localhost.jpeg)

---

### 📓 Notes Dashboard  
Sidebar-based navigation with live add/edit/delete of notes.

![Notes](./screenshots/Screenshot_6-7-2025_104937_localhost.jpeg)
  

---

## 📌 Future Enhancements

- 🔒 Client-side AES encryption for notes
- 🌐 Google OAuth login
- 💬 Toast notifications
- 🌗 Light/Dark mode toggle



## 👨‍💻 Author

Built with 💻 by [Lakshay Neem](https://github.com/lakshayneem)

---

## 🪪 License

MIT License
