// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require("./routes/auth");
const noteRoutes = require('./routes/notes');



require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(express.json());
app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);
// Test Route
app.get('/', (req, res) => {
  res.send('API is running');
});
app.post("/test", (req, res) => {
  res.json({ message: "Test route working!" });
});

// Connect to DB & Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log('Server started on port', process.env.PORT || 5000);
    });
  })
  .catch(err => console.error('DB Error:', err));
