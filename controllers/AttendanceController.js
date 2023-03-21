const Student = require("../models/Student");
const StudentAttendance = require("../models/StudentAttendance");
const Teacher = require("../models/Staff");
const TeacherAttendance = require("../models/TeacherAttendance");

// this will get and generate the current date in the
// format year-month-day
const getDate = new Date();
let day = ("0" + getDate.getDate()).slice(-2);
let month = ("0" + (getDate.getMonth() + 1)).slice(-2);
let year = getDate.getFullYear();

let currentDate = year + "-" + month + "-" + day;

// getting the students in a particular class
exports.getClass = async(req, res) => {
	const childClass = req.body.selectedVal;
	const students = await Student.find({class: childClass});
	res.status(200).json(students);
}

// marking attendance of students
exports.markAttendance = async(req, res) => {

	const newDocument = new StudentAttendance({
		studentID: req.body.data.student._id,
		date: currentDate,
		attendance: req.body.data.attendance
	});

	// checking if a document with the same student ID and same date exists
	const existingDoc = await StudentAttendance.findOne({studentID: req.body.data.student._id, date: currentDate});


	// if there is a document with the same student id and date
	// we need to update it
	// else we need to create a new document.
	if (existingDoc) {
		console.log("update it!");
		StudentAttendance.findByIdAndUpdate(existingDoc._id, {
			attendance: req.body.data.attendance
		}, (err, updated) => {
			if (err) console.log(err);
			else {
				console.log("updated");
			}
		});
	} else {
		await newDocument.save()
		// .then((doc) => console.log(doc));
		console.log("saved a new one!");
	}

}

// marking attendance of teachers
exports.markTeacherAttendance = async (req, res) => {
	const teacher = await Teacher.findOne({id: req.body.id})

	const newDocument = new TeacherAttendance({
		teacherID: teacher._id,
		date: currentDate,
		teacherName: teacher.name,
		attendance: "present"
	});

	const existingDoc = await TeacherAttendance.findOne({teacherID: teacher._id, date: currentDate});

	if (existingDoc) {
		console.log("already saved!");
	} else {
		await newDocument.save()
		// .then((doc) => console.log(doc));
		console.log("marked teacher attendance!");
	}


}
