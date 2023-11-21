import express from "express";
import { registerUser, loginUser, userProfile } from "../controllers/userController";
import validateToken from "../middleware/validateTokenHandler";
const router = express.Router();

// Registration of an user
router.post("/register", registerUser);

// Login the registered user
router.post("/login", loginUser);

// View the profile of an user
router.get("/profile", validateToken, userProfile);

module.exports = router;
