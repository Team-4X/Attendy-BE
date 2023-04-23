const AttendanceStudent = require("../models/AttendanceStudent");
const Student = require("../models/Student");

exports.findByDate = async (req, res) => {
  const { date } = req.params;

  try {
    // Find attendance documents for the given date
    const attendanceDocuments = await AttendanceStudent.find({ date: date });
    //console.log(attendanceDocuments);

    // Check if any attendance data was found
    if (attendanceDocuments.length === 0) {
      return res.status(404).json({ message: "Attendance data not found" });
    }

    // Create an array to store the attendance data with student information
    const attendanceDataWithStudentInfo = [];

    // Loop through the attendance documents and retrieve student information
    for (const attendanceDocument of attendanceDocuments) {
      const student = await Student.findOne({
        _id: attendanceDocument.studentID,
      });
      console.log("student:", student);
      if (!student) {
        console.log(
          `Student not found for ID: ${attendanceDocument.studentID}`
        );
        continue;
      }

      // Combine the attendance data and student information
      const attendanceDataWithStudent = {
        date: attendanceDocument.date,
        attendance: attendanceDocument.attendance,
        studentname: student.studentname,
        studentID: student.studentID,
        class: student.class,
      };

      // Add the combined data to the array
      attendanceDataWithStudentInfo.push(attendanceDataWithStudent);
    }

    // Return the attendance data with student information
    return res.status(200).json(attendanceDataWithStudentInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
