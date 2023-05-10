const express = require("express");
const staffManageRouter = express.Router();
const staffManageController = require("../controllers/StaffManageController");

// staffManageRouter.post("/manage", staffManageController.register);
staffManageRouter.get("/getTeachers", staffManageController.getTeachers);
staffManageRouter.delete("/delTeachers", staffManageController.delTeachers);
staffManageRouter.post("/addTeachers", staffManageController.addTeachers);
staffManageRouter.post("/findTeachers", staffManageController.findTeachers);
staffManageRouter.put("/editTeachers", staffManageController.editTeachers);
staffManageRouter.post("/loginTeacher", staffManageController.loginTeacher);

module.exports = staffManageRouter;
