const express = require('express');
const generateReportRouter = express.Router();
const generateReportController = require("../controllers/GenerateReportController");

generateReportRouter.get("/student", generateReportController.generateStudentReport);

module.exports = generateReportRouter;