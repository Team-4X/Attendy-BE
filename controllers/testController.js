const Admin = require("../models/Admin");

exports.index = async(req, res) => {
    // console.log(req.body);
    console.log('howdy from test controller!');
    const admins = await Admin.find();
    res.json(admins);
}