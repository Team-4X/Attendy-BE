const express = require("express");
const router = express.Router();
const { findStudent } = require("../controllers/StudentController");

//get all student
router.get("/:studentId", findStudent);

module.exports = router;
