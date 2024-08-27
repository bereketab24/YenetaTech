// services/adminService.js
const db = require("../config/database");

exports.getAllUsers = async () => {
  try {
    const sql = "SELECT * FROM users";
    const [users] = await db.query(sql);
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};



exports.deleteUser = async (userId) => {
  try {
    const sql = "DELETE FROM users WHERE user_id = ?";
    const [result] = await db.query(sql, [userId]);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(error.message);
  }
};

