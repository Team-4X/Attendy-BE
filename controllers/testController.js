const Admin = require("../models/Admin");

exports.index = async(req, res) => {
    const admins = await Admin.find();
    res.json(admins);
}