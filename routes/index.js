const express = require("express")
const router = express();
const staffRouter = require("./staffRoute");
const attendanceTeacherRouter = require("./attendanceTeacher");
const userRouter = require("./userRoute");
const authRouter = require('./auth');
const manageStaffRouter = require('./staffManage');
const attendanceRouter = require('./attendance');
const contactUsRouter = require('./contactUs');

// define routers
router.use("/staff-attendance", attendanceTeacherRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/staff", manageStaffRouter);
router.use("/attendance", attendanceRouter);
router.use("/contactus", contactUsRouter);

module.exports = router;
