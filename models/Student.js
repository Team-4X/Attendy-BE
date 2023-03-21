const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
