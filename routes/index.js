const express = require("express")
const router = express();
const staffRouter = require("./staffRoute");
const attendanceRouter = require("./attendanceTeacher");

// define routers
router.use("/staff", attendanceRouter);

module.exports = router;
