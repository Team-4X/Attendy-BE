const { Schema, default: mongoose } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  hash: {
    type: String,
  },
  salt: {
    type: String,
  }
},
{
  timestamps: true
}
);


module.exports = mongoose.model('Admin', adminSchema);