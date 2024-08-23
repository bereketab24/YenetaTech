// services/enrollmentService.js
const db = require("../config/database");

exports.enroll = (userId, courseId) => {
  const sql = "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)";
  return new Promise((resolve, reject) => {
    db.query(sql, [userId, courseId], (err, result) => {
      if (err) return reject(err);
      resolve({ userId, courseId });
    });
  });
};

exports.unenroll = (userId, courseId) => {
  const sql = "DELETE FROM enrollments WHERE user_id = ? AND course_id = ?";
  return new Promise((resolve, reject) => {
    db.query(sql, [userId, courseId], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows > 0);
    });
  });
};

exports.getEnrollments = (userId) => {
  const sql = "SELECT * FROM enrollments WHERE user_id = ?";
  return new Promise((resolve, reject) => {
    db.query(sql, [userId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
