require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes");
// const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
