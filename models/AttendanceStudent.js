const mongoose = require("mongoose");
const StudentAttendanceSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  attendance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "StudentAttendance",
  StudentAttendanceSchema,
  "student attendance"
);
