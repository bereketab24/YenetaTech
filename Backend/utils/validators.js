// utils/validators.js

exports.validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

exports.validatePassword = (password) => {
  // Example: Password must be at least 8 characters long and contain a number
  const passwordRegex = /^(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

// Additional validation functions as needed
