// services/userService.js
const db = require("../config/database");


exports.getUserById = async (userId) => {
  try {
     const sql = "SELECT * FROM users WHERE user_id = ?";
     const [results] = await db.query(sql, [userId])
     return results[0]
  } catch (error) {
    throw new Error(error.message)
  }
}
// exports.getUserById = (userId) => {
//   const sql = "SELECT * FROM users WHERE id = ?";
//   return new Promise((resolve, reject) => {
//     db.query(sql, [userId], (err, results) => {
//       if (err) return reject(err);
//       resolve(results[0]);
//     });
//   });
// };
exports.updateUser = async (userId, userData) => {
  try {
    const { username, email } = userData;
    const sql = "UPDATE users SET username = ?, email = ? WHERE user_id = ?";
    const values = [username, email, userId];
    const [result] = await db.query(sql, values)
    return result.affectedRows > 0
  } catch (error) {
    throw new Error(error.message)
    
  }
}
// exports.updateUser = (userId, userData) => {
//   const { username, email } = userData;

//   const sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";
//   const values = [username, email, userId];

//   return new Promise((resolve, reject) => {
//     db.query(sql, values, (err, result) => {
//       if (err) return reject(err);
//       resolve(result.affectedRows > 0);
//     });
//   });
// };
