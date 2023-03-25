const mongoose = require("mongoose");
const { Schema } = mongoose;
const StudentAttendanceSchema = new mongoose.Schema({
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "Student",
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
