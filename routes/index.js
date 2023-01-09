const express = require("express")
const router = express();
const testRouter = require("./testRoute");

// define routers
router.use("/test", testRouter);

module.exports = router;