const staff = require("../models/staff");
const objectId = require("mongodb");

exports.index = async (req, res) => {
    console.log("");
    const staffMembers = await staff.find();
    res.jason(staffMembers);
};