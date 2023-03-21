const express = require('express');
const generateReportRouter = express.Router();
const generateReportController = require("../controllers/GenerateReportController");

generateReportRouter.get("/download", generateReportController.generate);

module.exports = generateReportRouter;