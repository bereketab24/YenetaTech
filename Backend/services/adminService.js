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
//   return new Promise((resolve, reject) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, results) => {
//       if (err) return reject(err);
//       resolve(results);
//     });
//   });
// };

// exports.getAllCourses = async () => {
//   try {
//     const [courses] = await db.query(`SELECT * FROM courses`);
//     return courses;
//   } catch (error) {
//     throw new Error("Failed to fetch courses: " + error.message);
//   }
// };
// exports.getAllCourses = () => {
//   return new Promise((resolve, reject) => {
//     const sql = "SELECT * FROM courses";
//     db.query(sql, (err, results) => {
//       if (err) return reject(err);
//       resolve(results);
//     });
//   });
// };
exports.deleteUser = async (userId) => {
  try {
    const sql = "DELETE FROM users WHERE user_id = ?";
    const [result] = await db.query(sql, [userId]);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(error.message);
  }
};

// exports.deleteUser = (userId) => {
//   const sql = "DELETE FROM users WHERE id = ?";
//   return new Promise((resolve, reject) => {
//     db.query(sql, [userId], (err, result) => {
//       if (err) return reject(err);
//       resolve(result.affectedRows > 0);
//     });
//   });
// };
