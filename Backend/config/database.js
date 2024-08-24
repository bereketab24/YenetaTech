const mysql = require("mysql2/promise");
require("dotenv").config(); // Load environment variables from .env file

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // or any other default database, can be omitted
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testConnection = async () => {
    try {
        // Test the connection
        const connection = await pool.getConnection();
        console.log('MySQL Connected...');
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); // Exit the process if there is a connection error
    }
};

testConnection()

module.exports = pool;