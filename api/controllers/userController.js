const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userReserved = await Users.findOne({ email });
  if (userReserved) {
    res.status(400);
    throw new Error("User already registered! Try logging in.");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  console.log(`Password hashing: ${hashPassword}`);

  const user = await Users.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(`User created ${user}`);

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid!");
  }

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
