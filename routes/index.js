const express = require("express")
const router = express.Router();
const userRouter = require("./userRoute");
const authRouter = require('./auth');


// define routers
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
