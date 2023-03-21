const { Schema, default: mongoose } = require("mongoose");

const sessionSchema = new Schema({
  session: {
    lastAccess: Date,
    cookie: {
      maxAge: Date,
      expires: Date,
      httpOnly: Boolean,
      path: String,
    },
  }
});

module.exports = mongoose.model('Session', sessionSchema);
