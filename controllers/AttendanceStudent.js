const AttendanceStudent = require("../models/AttendanceStudent");
const Student = require("../models/Student");

exports.findByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const documents = await AttendanceStudent.find({ date: date }).populate(
      "studentID",
      "studentID name class"
    ); // populate the studentID field with name and class fields

    //find documents by using date
    if (!documents) {
      return res.status(404).json({ message: "Attendance data not found" });
    } else {
      return res.status(200).json(documents);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
