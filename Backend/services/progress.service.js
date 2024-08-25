// services/progressService.js
const db = require("../config/database");



exports.getProgress = async (userId, courseId) => {
  try {
    const sql = "SELECT * FROM progress WHERE user_id = ? AND course_id = ?";
    const [result] = await db.query(sql, [userId, courseId])
    return result[0]
  } catch (error) {
    throw new Error(error.message)
  }
}
// exports.getProgress = (userId, courseId) => {
//   const sql = "SELECT * FROM progress WHERE user_id = ? AND course_id = ?";
//   return new Promise((resolve, reject) => {
//     db.query(sql, [userId, courseId], (err, results) => {
//       if (err) return reject(err);
//       resolve(results[0]);
//     });
//   });
// };


exports.updateProgress = async (userId, courseId, progressData) => {
  try {
    const { completedVideos, submittedAssignments } = progressData;
    const sql =
      "INSERT INTO progress (user_id, course_id, completed_videos, submitted_assignments) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE completed_videos = ?, submitted_assignments = ?";
    const values = [
      userId,
      courseId,
      completedVideos,
      submittedAssignments,
      completedVideos,
      submittedAssignments,
    ];

    const [result] = await db.query(sql,values)
    return result.affectedRows > 0
  } catch (error) {
    throw new Error(error.message)
  }
}
// exports.updateProgress = (userId, courseId, progressData) => {
//   const { completedVideos, submittedAssignments } = progressData;

//   const sql =
//     "INSERT INTO progress (user_id, course_id, completed_videos, submitted_assignments) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE completed_videos = ?, submitted_assignments = ?";
//   const values = [
//     userId,
//     courseId,
//     completedVideos,
//     submittedAssignments,
//     completedVideos,
//     submittedAssignments,
//   ];

//   return new Promise((resolve, reject) => {
//     db.query(sql, values, (err, result) => {
//       if (err) return reject(err);
//       resolve(result.affectedRows > 0);
//     });
//   });
// };
