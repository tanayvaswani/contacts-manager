const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

// @desc Get all contacts
// @route GET/api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

// @desc Create contact
// @route POST/api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill all the fields!");
  }

  res.status(200).json({ message: `Create contact!` });
});

// @desc Get contact with ID
// @route GET/api/contacts/id
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact with id: ${req.params.id}` });
});

// @desc Update contact with ID
// @route PUT/api/contacts/id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact with id: ${req.params.id}` });
});

// @desc Delete contact with ID
// @route DELETE/api/contacts/id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact with id: ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};