const express = require("express");
const authController = require("../controllers/AuthController");
const authRouter = express.Router();
const passport = require("passport");

authRouter.post("/register", authController.register);
authRouter.post('/login', authController.login);
authRouter.get("/register", passport.authenticate("jwt", {session: false}), (req, res) => {
	res.send("register page");
})


// authRouter.get("/login", passport.authenticate('local', { failureRedirect: 'http://localhost:3000', successRedirect: 'http://localhost:3000/about' }));
// take care of this

module.exports = authRouter;
