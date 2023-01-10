const Student = require("../models/Student");
const objectId = require("mongodb");

exports.index = async (req, res) => {
    // console.log(req.body);
    console.log('howdy from test controller!');
    // res.send("<h1>Howdy from test Route</h1>");
    const students = await Student.find();
    res.json(students);
}
