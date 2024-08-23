// middlewares/errorHandler.js

exports.handleErrors = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ message: "An unexpected error occurred" });
};
