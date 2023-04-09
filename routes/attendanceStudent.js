const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/AttendanceStudent");

router.get("/:date", attendanceController.findByDate);

module.exports = router;
