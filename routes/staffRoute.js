const express = require("express")
const staffController = require("../controllers/staffController.js");
const router = express();
 
router.get("/", staffController.index);

module.exports = router;