const { Schema, default: mongoose } = require("mongoose");

const messageSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);
