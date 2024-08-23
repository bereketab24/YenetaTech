const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config(); // Load environment variables

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
// Add other routes as you develop them

const db = require("./config/database"); // MySQL connection
const sessionConfig = require("./config/session"); // Session configuration

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(session(sessionConfig));

// Use routes
app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
// Add other routes as needed

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
