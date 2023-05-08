const express = require("express")
const router = express.Router();
const userRouter = require("./userRoute");
const authRouter = require('./auth');
const manageStaffRouter = require('./staffManage');
const attendanceRouter = require('./attendance');
const contactUsRouter = require('./contactUs');
const studentManageRouter=require('./StudentManage')

// define routers
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/staff", manageStaffRouter);
router.use("/attendance", attendanceRouter);
router.use("/contactus", contactUsRouter);
router.use("/student",studentManageRouter);

module.exports = router;
