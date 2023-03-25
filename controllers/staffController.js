const Staff = require("../models/Staff");
const objectId = require("mongodb");

exports.index = async (req, res) => {
    console.log("fghxfghn");
    const staffMembers = await Staff.find();
    console.log(staffMembers);
    res.json(staffMembers);
};