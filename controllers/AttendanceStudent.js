const AttendanceStudent = require("../models/AttendanceStudent");

//get attendance student
const findAttendanceStudent = async (req, res) => {
  const { studentId } = req.params;

  //console.log(studentId);

  try {
    // Find all attendance documents related to the student ID
    const attendance = await AttendanceStudent.find({ studentID: studentId });

    // If no attendance data found for the student ID
    if (attendance.length === 0) {
      return res.status(404).json({ message: "Attendance data not found" });
    }

    // Send the attendance data as a response
    res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { findAttendanceStudent };
