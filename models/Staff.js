const { Schema, default: mongoose } = require("mongoose");

const staffSchema = new Schema({
  name: {
    type: String,
  },
  id: {
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


module.exports = mongoose.model('Teacher', staffSchema, "teachers");