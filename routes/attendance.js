const express = require("express");
const attendanceRouter = express.Router();
const attendanceController = require("../controllers/AttendanceController");

attendanceRouter.post("/getClass", attendanceController.getClass);
attendanceRouter.post("/markAttendance", attendanceController.markAttendance);
attendanceRouter.post("/markTeacherAttendance", attendanceController.markTeacherAttendance);

module.exports = attendanceRouter;
