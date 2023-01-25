const express = require("express")
const adminController = require("../controllers/AdminController.js");
const passport = require("passport");

const router = express.Router();

router.get("/", passport.authenticate("jwt", {session: false}), adminController.index);

module.exports = router;