const express = require("express")
const router = express.Router();
const userRouter = require("./userRoute");
const authRouter = require('./auth');
const manageStaffRouter = require('./staffManage');


// define routers
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/staff", manageStaffRouter);

module.exports = router;
