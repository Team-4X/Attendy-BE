const { Schema, default: mongoose } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Admin', adminSchema);