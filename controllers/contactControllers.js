const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({
    name,
    email,
    message,
  });
  await newContact.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({ message: result });
    }
  });
};

module.exports = { createContact };
