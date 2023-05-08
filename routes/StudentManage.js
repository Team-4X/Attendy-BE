const express = require("express");
const studentManageRouter = express.Router();
const studentManageController = require("../controllers/StudentManageController");

// studentManageRouter.post("/manage", studentManageController.register);
studentManageRouter.get("/getStudent", studentManageController.getStudent);
studentManageRouter.delete("/delStudent", studentManageController.delStudent);
studentManageRouter.post("/addStudent", studentManageController.addStudents);
studentManageRouter.post("/findStudent", studentManageController.findStudents);
studentManageRouter.put("/editStudent", studentManageController.editStudents);

module.exports = studentManageRouter;