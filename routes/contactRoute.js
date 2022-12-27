const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");

router.post("/", contactControllers.createContact);

module.exports = router;
