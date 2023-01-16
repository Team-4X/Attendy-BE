const express = require("express");
const router = express.Router();
const { findById, findAll } = require("../controllers/StudentController");

//get student by student id
//router.get("/:id", findById);

//get all student
router.get("/", findAll);

module.exports = router;
