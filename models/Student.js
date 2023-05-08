const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
