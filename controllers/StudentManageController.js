const { generateHash, validatePassword } = require('../lib/passwordUtils');
const Student = require("../models/Student");


exports.getStudent = async (req, res) => {
	const student = await Student.find();
	console.log('all is well');
	res.json(student);
}
exports.delStudent = async (req, res) => {
	const student = req.body;
	try {
		await Student.findByIdAndDelete(student._id);
		res.status(200).send("Successfully deleted student from database.");
	} catch (error) {
		console.error(error);
	}
}
exports.addStudents = async (req, res) => {                                      
    console.log (req.body)
	const newStudent = new Student({
		studentname: req.body.name,
		studentID: req.body.id,
		class: req.body.class,
		
	});

	try {
		await newStudent.save()
		.then((student) => {
			res.status(201).json({message: "Student added to the database Successfully!"});
		});
	} catch (err) {
		console.error(err);
	}
}
exports.findStudents = async (req, res) => {
	let searchParameter;
	if (req.body.name == null && req.body.studentID !== null) {
		searchParameter = req.body.studentID;
		Student.find({studentID: {$regex: searchParameter, $options: 'i'}}, (err, student) => {
			if (err) console.log(err);
			else {
					console.log(student);
					res.send({
					data: student
				});
			}
		});
	} else if (req.body.studentID == null && req.body.name !== null) {
		searchParameter = req.body.name;
		Student.find({studentname: {$regex: searchParameter, $options: 'i'}}, (err, student) => {
			if (err) console.log(err);
			else res.send({
				data: student
			});
		});
	}
}
exports.editStudents = async (req, res) => {
	
	Student.findByIdAndUpdate(req.body.id, {
		studentname: req.body.new_name,
		studentID: req.body.new_id,
		class:req.body.new_class
	},
	{new: true}, (err, result) => {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}
		res.status(200).send(result);
	});
}
/*
exports.loginStudent = async (req, res) => {
	const studentId = req.body.id;
	const student = await student.findOne({id: Student});
	// if the user exists
	if (student) {
		const password = req.body.password;
		const loggedStudent = validatePassword(password, Student.hash, Student.salt);
		res.status(200).send(loggedStudent);
	} else {
		console.log("User doesn't exist");
	}
}
*/