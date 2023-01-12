const express = require("express")
const testController = require("../controllers/testController.js");

const router = express.Router();

router.get("/", testController.index);

module.exports = router;