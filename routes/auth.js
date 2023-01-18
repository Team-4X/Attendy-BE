const express = require("express");
const authController = require("../controllers/AuthController");
const authRouter = express.Router();
const passport = require('passport');

authRouter.post("/register", authController.register);
authRouter.post('/login', passport.authenticate('local', { failureRedirect: '/login-failure', faiureMessage: true }, (req, res)=> {
	console.log("this is response: " + res);
}));


// authRouter.get("/login", passport.authenticate('local', { failureRedirect: 'http://localhost:3000', successRedirect: 'http://localhost:3000/about' }));
// take care of this

module.exports = authRouter;
