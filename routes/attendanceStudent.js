const express = require("express");
const router = express.Router();
const { findAttendanceStudent } = require("../controllers/AttendanceStudent");

router.get("/:studentId", findAttendanceStudent);

module.exports = router;
