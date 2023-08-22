const ErrorHander = require("../util/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsynk");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

// user middleware

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

// admin middleware
exports.authorizeRoles = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  const admin = process.env.admin
  if (admin === req.user.role) {
    next();
  } else {
    return next(
      new ErrorHander("Please Adminlogin to access this resource", 401)
    );
  }
});
