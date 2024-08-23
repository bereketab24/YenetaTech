// models/dbModels.js
const db = require("../config/database");

exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users SET ?";
    db.query(query, userData, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

// More model methods like updateUser, deleteUser, etc.
