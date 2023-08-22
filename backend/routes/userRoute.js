const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
// user detail route
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(updatePassword);
router.route("/me/update").put(updateProfile);
router.route("/admin/users").get(getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles, getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles, updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles, deleteUser);

module.exports = router;
