const express = require("express");
const router = express.Router();
const { findAttendanceTeacher } = require("../controllers/AttendanceTeacher");

router.get("/:teacherId", findAttendanceTeacher);

module.exports = router;