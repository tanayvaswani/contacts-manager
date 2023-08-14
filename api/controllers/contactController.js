// @desc Get all contacts
// @route GET/api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: `Get all contacts!` });
};

// @desc Create contact
// @route POST/api/contacts
// @access public
const createContact = (req, res) => {
  res.status(200).json({ message: `Create contact!` });
};

// @desc Get contact with ID
// @route GET/api/contacts/id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact with id: ${req.params.id}` });
};

// @desc Update contact with ID
// @route PUT/api/contacts/id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact with id: ${req.params.id}` });
};

// @desc Delete contact with ID
// @route DELETE/api/contacts/id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact with id: ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
