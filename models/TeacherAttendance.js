const mongoose = require("mongoose");

const TeacherAttendanceSchema = new mongoose.Schema({
    teacherID: {
        type: String,
        required: true,
    },
    teacherName: {
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
    }
});

module.exports = mongoose.model("TeacherAttendance", TeacherAttendanceSchema, "staff attendance");
