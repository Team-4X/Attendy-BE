const express = require("express");
const router = express.Router();
const { findStudent } = require("../controllers/StudentController");

//get student by student id
//router.get("/:id", findById);

//get all student
router.get("/", findStudent);

module.exports = router;
