const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Import and use the signup route
const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter);

// Test route
app.use('/signup/test', signupRouter);

// Set uploads folder to be accessible
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
