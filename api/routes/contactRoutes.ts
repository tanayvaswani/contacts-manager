import express from "express";
import {
  getContacts,
  createContact,
  getContact,
  deleteContact,
  updateContact,
} from "../controllers/contactController";
import validateToken from "../middleware/validateTokenHandler";
const router = express.Router();

router.use(validateToken); // middleware for validating tokens for all the routes
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
