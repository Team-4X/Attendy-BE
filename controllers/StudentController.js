const AttendanceStudent = require("../models/AttendanceStudent");
const Student = require("../models/Student");

exports.findStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    // Find the student by studentId
    const student = await Student.findOne({ studentID: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Find the attendance records for the student
    const attendance = await AttendanceStudent.find({
      studentID: student._id,
    });

    const attendanceDataWithStudentInfo = attendance.map((att) => ({
      date: att.date,
      attendance: att.attendance,
      studentname: student.studentname,
      studentID: student.studentID,
      class: student.class,
    }));

    // Return the attendance data with student information
    return res.status(200).json(attendanceDataWithStudentInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
