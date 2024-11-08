// services/enrollmentService.js
const db = require("../config/database");

exports.enroll = async (userId, courseId) => {
  try {
    const sql = "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)";
    const [result] = await db.query(sql, [userId, courseId]);
    return { userId, courseId };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.unenroll = async (userId, courseId) => {
  try {
    const sql = "DELETE FROM enrollments WHERE user_id = ? AND course_id = ?";
    const [result] = await db.query(sql, [userId, courseId]);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(error.message);
  }
};

// exports.unenroll = (userId, courseId) => {
//   const sql = "DELETE FROM enrollments WHERE user_id = ? AND course_id = ?";
//   return new Promise((resolve, reject) => {
//     db.query(sql, [userId, courseId], (err, result) => {
//       if (err) return reject(err);
//       resolve(result.affectedRows > 0);
//     });
//   });
// };

exports.getEnrollments = async (userId) => {
  try {
    const sql = "SELECT * FROM enrollments WHERE user_id = ?";
    const [result] = await db.query(sql, [userId]);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
