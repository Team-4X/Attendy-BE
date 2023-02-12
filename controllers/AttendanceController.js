const Student = require("../models/Student");

/*
 * this doesn't work because Student model is not defined
 * get Amaya's code from the github and make it. 
*/
exports.getClass = async(req, res) => {
	const childClass = req.body.selectedVal;
	const students = await Student.find({class: childClass});
	res.status(200).json(students);
}
