const AttendanceStudent = require("../models/AttendanceStudent");
const Student = require("../models/Student");

//retrieve student by id
// exports.findById = (req, res) => {
//   console.log(req.params.id);
//   Student.findById(req.params.id, (err, student) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send(student);
//   });
// };

//retrieve all student
exports.findStudent = async (req, res) => {
  const { studentId } = req.params;
  //console.log(req.body);
  console.log("studentid", studentId);

  //get student details

  try {
    // Find all student details related to the student ID
    const student = await Student.findOne({ studentID: studentId });
    console.log(student);
    //Find student name and class
    //const studentDetails = await StudentDetails.find({})
    // If no attendance data found for the student ID
    if (!student) {
      return res.status(404).json({ message: "Attendance data not found" });
    } else {
      console.log(student._id);
      const attendance = await AttendanceStudent.find({
        studentID: student._id,
      });

      console.log(attendance);
      //get student details and attendance details
      const allDetails = [student, attendance];
      console.log("allDetails", allDetails);
      // Send the student data as a response
      res.status(200).json(allDetails);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
