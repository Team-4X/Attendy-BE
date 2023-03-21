const AttendanceStudent = require("../models/AttendanceStudent");

//get attendance student

exports.findAttendanceStudent = async (req, res) => {
  const studentId = req.body.studentID;
  console.log(studentId);
  try {
    // find all attendance records for the student with the given ID
    const attendanceRecords = await AttendanceStudent.find({ _id: studentId });
    console.log(attendanceRecords);
    // log each attendance record individually to the console
    attendanceRecords.forEach((record) => {
      console.log(record);
    });
    // return the attendance records in the response body
    res.json(attendanceRecords);
  } catch (error) {
    // if an error occurs while retrieving the attendance records, return a 500 Internal Server Error
    res.status(500).json({ message: "Internal Server Error" });
  }
};
