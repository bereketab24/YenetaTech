// services/authService.js
const bcrypt = require("bcrypt");
const db = require("../config/database");

exports.register = async (userData) => {
    try {
      const { fullname, username, email, password } = userData;

      // Fetch the role_id for "student"
      const [roleResult] = await db.query(
        "SELECT role_id FROM roles WHERE role_name = 'student'"
      );
      const studentRoleId = roleResult[0].role_id;

        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO users (fullname, username, email, password, role_id) VALUES (?, ?, ?, ?,?)`;
        const values = [fullname ,username, email, hashedPassword, studentRoleId];

        const [result] = await db.query(sql, values);
        return { id: result.insertId, username, email, roleId: studentRoleId };
    } catch (error) {
        console.error("Error during registration:", error.message);  // Debugging line
        throw new Error('Registration failed: ' + error.message);
    }
};

exports.login = async (loginData) => {
  const { email, password } = loginData;
  const sql = "SELECT * FROM users WHERE email = ?";
  try {
    const [result] = await db.query(sql, [email]);
    if (result.length === 0){
      throw new Error("User not found")
    }
    const user = result[0]
    const match = await bcrypt.compare(password, user.password)
    if (!match){
      throw new Error("Invalid Password")
    }
    return {user}
  } catch (error) {
    throw new Error("Error during login: " + error.message);
    
  }}
  
