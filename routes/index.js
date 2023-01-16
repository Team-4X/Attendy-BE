const express = require("express");
const router = express();
const testRouter = require("./testRoute");
const studentRouter = require("./student");

// define routers
router.use("/test", testRouter);
router.use("/student", studentRouter);

module.exports = router;
