const express = require("express")
const router = express();
const staffRouter = require("./staffRoute");

// define routers
router.use("/staff", staffRouter);

module.exports = router;