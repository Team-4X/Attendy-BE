const express = require("express");
const router = express.Router();
const attendanceStaffController = require("../controllers/GetTeacherByDate.js");

router.get("/:date", attendanceStaffController.findByDate);


module.exports = router;