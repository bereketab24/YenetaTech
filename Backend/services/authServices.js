// services/authService.js
const bcrypt = require("bcrypt");
const db = require("../config/database");

exports.register = async (userData) => {
  const { username, email, password, roleId } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)";
  const values = [username, email, hashedPassword, roleId];

  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, username, email, roleId });
    });
  });
};

exports.login = async (loginData) => {
  const { email, password } = loginData;

  const sql = "SELECT * FROM users WHERE email = ?";
  return new Promise((resolve, reject) => {
    db.query(sql, [email], async (err, results) => {
      if (err) return reject(err);

      if (results.length === 0) {
        return reject(new Error("User not found"));
      }

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return reject(new Error("Invalid password"));
      }

      resolve({ user });
    });
  });
};
