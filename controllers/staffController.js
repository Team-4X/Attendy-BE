const Staff = require("../models/Staff");
const objectId = require("mongodb");

exports.index = async (req, res) => {
    const staffMembers = await Staff.find();
    res.json(staffMembers);
};