const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const newDocument = new Message({
		email: req.body.email,
		heading: req.body.heading,
		message: req.body.message
	});
    try {
        await newDocument.save();
        res.sendStatus(200);
    } catch(err) {
        console.error(err);
    }

}

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        console.log(messages);
        res.status(200).json(messages);
    } catch (err) {
        console.error(err);
    }
}
