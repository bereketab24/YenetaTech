// services/userService.js
const db = require("../config/database");

exports.getUserById = async (userId) => {
  try {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    const [results] = await db.query(sql, [userId]);
    return results[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateUser = async (userId, userData) => {
  try {
    const { username, email } = userData;
    const sql = "UPDATE users SET username = ?, email = ? WHERE user_id = ?";
    const values = [username, email, userId];
    const [result] = await db.query(sql, values);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(error.message);
  }
};

