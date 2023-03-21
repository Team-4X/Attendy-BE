const express = require("express");
const contactUsRouter = express.Router();
const ContactController = require("../controllers/ContactController");

contactUsRouter.post("/sendMessage", ContactController.sendMessage);
contactUsRouter.get("/getMessages", ContactController.getMessages);

module.exports = contactUsRouter;
