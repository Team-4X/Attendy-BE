const express = require("express");
const authController = require("../controllers/AuthController");
const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

authRouter.get("/login", authController.loginGet);

module.exports = authRouter;