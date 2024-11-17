// services/authService.js
const bcrypt = require("bcrypt");
const db = require("../config/database");
const crypto = require("crypto");
const sendVerificationEmail = require("../utils/emailSender")
// service for sign up
exports.register = async (userData, verification_code) => {
  try {
    const { fullname, username, email, password } = userData;

    // Fetch the role_id for "student"
    const [roleResult] = await db.query(
      "SELECT role_id FROM roles WHERE role_name = 'student'"
    );
    const studentRoleId = roleResult[0].role_id;

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (fullname, username, email, password, role_id, is_verified, verification_code) VALUES (?, ?, ?, ?,?, ?,?)`;
    const values = [fullname, username, email, hashedPassword, studentRoleId, 0 , verification_code];
    
    const [result] = await db.query(sql, values);

    return {
      id: result.insertId,
      fullname,
      username,
      email,
      is_verified,
      roleId: studentRoleId,
      message: 'Registration successful. Please check your email for the verification code.'
    };
  } catch (error) {
    // console.error("Error during registration:", error.message);  // Debugging line
    throw new Error("Registration failed: " + error.message);
  }
};

// controllers/authController.js
exports.verifyEmail = async (verificationData) => {
  const { email, code } = verificationData;

  try {
    // Check if the code matches
    const sql = `SELECT * FROM users WHERE email = ? AND verification_code = ?`;
    const values = [email, code];
    const [user] = await db.query(sql,values);

    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid verification code or email' });
    }

    // Update user to mark as verified
    await db.query(
      'UPDATE users SET is_verified = 1, verification_code = NULL WHERE email = ?',
      [email]
    );
    return {message: 'Email successfully verified' }
  } catch (error) {
    console.error('Verification error:', error);
    return {message: 'Verification failed. Please try again later.'}
  }
};

// Service for login
exports.login = async (loginData) => {
  const { email, password } = loginData;
  const sql = "SELECT * FROM users WHERE email = ?";
  try {
    const [result] = await db.query(sql, [email]);
    if (result.length === 0) {
      throw new Error("User not found");
    }
    const user = result[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid Password");
    }
    return { user };
  } catch (error) {
    throw new Error("Error during login: " + error.message);
  }
};
