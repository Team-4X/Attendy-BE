const { generateHash, validatePassword } = require('../lib/passwordUtils');
const Staff = require("../models/Staff");

exports.register = async (req, res) => {
	console.log("Let's register a fucking staff member.");
}
exports.getTeachers = async (req, res) => {
	const teachers = await Staff.find();
	console.log('all is well');
	res.json(teachers);
}
exports.delTeachers = async (req, res) => {
	const teacher = req.body;
	try {
		await Staff.findByIdAndDelete(teacher._id);
		res.status(200).send("Successfully deleted teacher from database.");
	} catch (error) {
		console.error(error);
	}
}
exports.addTeachers = async (req, res) => {

	const saltHash = generateHash(req.body.password);
	const salt = saltHash.salt;
	const hash = saltHash.hash;

	const newTeacher = new Staff({
		name: req.body.name,
		id: req.body.id,
		salt: salt,
		hash: hash,
	});

	try {
		await newTeacher.save()
		.then((teacher) => {
			res.status(201).json({message: "Teacher added to the database Successfully!"});
		});
	} catch (err) {
		console.error(err);
	}
}
exports.findTeachers = async (req, res) => {
	let searchParameter;
	if (req.body.name == null && req.body.staffID !== null) {
		searchParameter = req.body.staffID;
		Staff.find({id: {$regex: searchParameter, $options: 'i'}}, (err, teacher) => {
			if (err) console.log(err);
			else {
					console.log(teacher);
					res.send({
					data: teacher
				});
			}
		});
	} else if (req.body.staffID == null && req.body.name !== null) {
		searchParameter = req.body.name;
		Staff.find({name: {$regex: searchParameter, $options: 'i'}}, (err, teacher) => {
			if (err) console.log(err);
			else res.send({
				data: teacher
			});
		});
	}
}
exports.editTeachers = async (req, res) => {
	console.log(req.body);
	console.log("------------");
	
	Staff.findByIdAndUpdate(req.body.id, {
		name: req.body.new_name,
		id: req.body.new_id,
	},
	{new: true}, (err, result) => {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}
		res.status(200).send(result);
	});
}