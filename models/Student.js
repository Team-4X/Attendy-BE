const { Schema, default: mongoose } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
