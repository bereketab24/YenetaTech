// services/adminService.js
const db = require("../config/database");

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.deleteUser = (userId) => {
  const sql = "DELETE FROM users WHERE id = ?";
  return new Promise((resolve, reject) => {
    db.query(sql, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};
