const Student = require("../models/Student");

//retrieve student by id
// exports.findById = (req, res) => {
//   console.log(req.params.id);
//   Student.findById(req.params.id, (err, student) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send(student);
//   });
// };

//retrieve all student
exports.findAll = (req, res) => {
  Student.find((err, students) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(students);
  });
};



