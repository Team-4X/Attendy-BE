const mongoose = require("mongoose");

const AttendanceStudentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
  },
  date: {
    type: [Date],
    default: [],
    required: true,
  },
  attendance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("student attendance", AttendanceStudentSchema);
