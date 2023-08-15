const express = require("express");
const {
  registerUser,
  loginUser,
  userProfile,
} = require("../controllers/userController");
const router = express.Router();

// Registration of an user
router.post("/register", registerUser);

// Login the registered user
router.post("/login", loginUser);

// View the profile of an user
router.post("/profile", userProfile);

module.exports = router;
