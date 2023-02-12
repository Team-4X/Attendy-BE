const express = require("express");
const attendanceRouter = express.Router();
const attendanceController = require("../controllers/AttendanceController");

attendanceRouter.post("/getClass", attendanceController.getClass);

module.exports = attendanceRouter;