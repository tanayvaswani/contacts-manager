const asyncHandler = require("express-async-handler");

// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Registration" });
});

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Login" });
});

// @desc Profile of a user
// @route POST /api/users/profile
// @access private
const userProfile = asyncHandler(async (req, res) => {
  res.json({ message: "User Profile" });
});

module.exports = {
  registerUser,
  loginUser,
  userProfile,
};
