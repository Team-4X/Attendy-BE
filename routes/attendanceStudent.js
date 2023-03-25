const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/AttendanceStudent");

router.get("/", attendanceController.findAttendanceStudent);

module.exports = router;
