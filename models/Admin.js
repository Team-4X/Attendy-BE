const { Schema, default: mongoose } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  hash: {
    type: String,
  },
  salt: {
    type: String,
  }
});

module.exports = mongoose.model('Admin', adminSchema);