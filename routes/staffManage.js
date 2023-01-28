const express = require("express");
const staffManageRouter = express.Router();
const staffManageController = require("../controllers/StaffManageController");

staffManageRouter.post("/manage", staffManageController.register);

module.exports = staffManageRouter;
