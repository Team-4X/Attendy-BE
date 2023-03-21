const express = require("express");
const router = express();
const testRouter = require("./testRoute");
const studentRouter = require("./student");
const attendanceRouter = require("./attendanceStudent");
// define routers
router.use("/test", testRouter);
router.use("/student", studentRouter);
router.use("/find-AttendanceStudent", attendanceRouter);

module.exports = router;
