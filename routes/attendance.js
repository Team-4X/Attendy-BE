const express = require("express");
const attendanceRouter = express.Router();
const attendanceController = require("../controllers/AttendanceController");

attendanceRouter.get("/getAttendanceCounts", attendanceController.getAttendanceCounts);

attendanceRouter.post("/getClass", attendanceController.getClass);
attendanceRouter.get("/getClassList", attendanceController.getClassList);
attendanceRouter.post("/markAttendance", attendanceController.markAttendance);
attendanceRouter.post("/markTeacherAttendance", attendanceController.markTeacherAttendance);

module.exports = attendanceRouter;
