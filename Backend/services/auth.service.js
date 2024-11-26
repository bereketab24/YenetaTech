// services/authService.js
const bcrypt = require("bcrypt");
const db = require("../config/database");
const crypto = require("crypto");
const sendVerificationEmail = require("../utils/emailSender");
// service for sign up
exports.register = async (userData, verification_code) => {
  try {
    const { fullname,  email, password } = userData;

    // Fetch the role_id for "student"
    const [roleResult] = await db.query(
      "SELECT role_id FROM roles WHERE role_name = 'student'"
    );
    const studentRoleId = roleResult[0].role_id;

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (fullname,  email, password, role_id, is_verified, verification_code) VALUES (?, ?, ?, ?,?, ?,?)`;
    const values = [
      fullname,
      
      email,
      hashedPassword,
      studentRoleId,
      0,
      verification_code,
    ];

    const [result] = await db.query(sql, values);

    return {
      id: result.insertId,
      fullname,
      // username,
      email,
      // is_verified,
      roleId: studentRoleId,
      message:
        "Registration successful. Please check your email for the verification code.",
    };
  } catch (error) {
    // console.error("Error during registration:", error.message);  // Debugging line
    throw new Error("Registration failed: " + error.message);
  }
};

// controllers/authController.js
exports.verifyEmail = async (verificationData) => {
  const { email, OTP } = verificationData;
  console.log(verificationData);
  console.log(email, "Here you are", OTP);

  try {
    // Check if the code matches
    const sql = `SELECT * FROM users WHERE email = ? AND verification_code = ?`;
    const values = [email, OTP];
    const [user] = await db.query(sql, values);

    console.log("This is from me ", user);

    if (user) {
      // Update user to mark as verified
      const response = await db.query(
        "UPDATE users SET is_verified = 1, verification_code = NULL WHERE email = ?",
        [email]
      );
      const sql = `SELECT * FROM users WHERE email = ?`;
      const values = [email];
      const [response1] = await db.query(sql, values);
      console.log("this is from res1", response1);
      console.log("response from veri update:", response);
      return response1[0];
    }
  } catch (error) {
    console.error("Verification error:", error);
    return { message: "Verification failed. Please try again later." };
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
    if (!user.is_verified) {
      throw new Error(
        "Email not verified. Please check your email to complete verification."
      );
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid Password");
    }
    return { user };
  } catch (error) {
    throw new Error("Error during login: " + error.message);
  }
};
