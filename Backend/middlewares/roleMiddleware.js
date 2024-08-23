// middlewares/roleMiddleware.js

exports.isAdmin = (req, res, next) => {
  if (req.session && req.session.roleId === 1) {
    // Assuming roleId 1 is Admin
    return next();
  }
  return res.status(403).json({ message: "Forbidden: Admins only" });
};
