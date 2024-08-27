// app.js

// Import core modules
const express = require("express");

// Import middleware modules
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config(); // Load environment variables from .env file

// Import configuration files
const db = require("./config/database"); // MySQL connection
const sessionConfig = require("./config/session"); // Session configuration
const { isAuthenticated } = require("./middlewares/authMiddleware");
const { handleErrors } = require("./middlewares/errorHandler");
const { isAdmin } = require("./middlewares/roleMiddleware");


// Import routes
const routes = require("./routes"); // This imports from 'routes/index.js'
const installRoutes = require("./routes/install");

// Initialize the Express application
const app = express();
// Initialize session management
app.use(session(sessionConfig));
app.use("/install", installRoutes);

// -------------------- Middleware Setup -------------------- //

// Parse incoming JSON requests and put the parsed data in req.body
app.use(express.json());

// Parse URL-encoded data (from HTML forms) and put the parsed data in req.body
app.use(express.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Secure the app by setting various HTTP headers
app.use(helmet());

// HTTP request logger middleware for logging requests in the 'dev' format
app.use(morgan("dev"));



// -------------------- Routes Setup -------------------- //

// Use the imported routes
app.use("/", routes);

// -------------------- Error Handling -------------------- //

// Handle 404 - Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Global Error Handler
app.use(handleErrors); 



// -------------------- Start the Server -------------------- //

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
