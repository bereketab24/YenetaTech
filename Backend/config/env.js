// config/env.js
require("dotenv").config(); // Load environment variables

// Optional: Add any additional environment setup or validation here

const env = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  sessionSecret: process.env.SESSION_SECRET,
};

module.exports = env;
