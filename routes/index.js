const express = require("express")
const router = express.Router();
const testRouter = require("./testRoute");
const authRouter = require('./auth');

// define routers
router.use("/test", testRouter);
router.use("/auth", authRouter);

module.exports = router;
