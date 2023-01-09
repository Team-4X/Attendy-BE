const express = require("express")
const testController = require("../controllers/testController.js");

const router = express();

router.get("/", testController.index);

module.exports = router;