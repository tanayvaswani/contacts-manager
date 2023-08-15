const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "User Registration" });
});

router.post("/login", (req, res) => {
  res.json({ message: "User Login" });
});

router.post("/profile", (req, res) => {
  res.json({ message: "User Profile" });
});

module.exports = router;
