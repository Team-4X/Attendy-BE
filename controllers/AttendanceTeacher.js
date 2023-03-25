const AttendanceTeacher = require("../models/TeacherAttendance");
const Staff = require("../models/Staff");


const findAttendanceTeacher = async (req, res) => {
  const { teacherId } = req.params;

console.log(teacherId);


  try {

    const teacher = await Staff.findOne({id: teacherId});
    console.log(teacher);    
    const attendance = await AttendanceTeacher.find({ teacherID: teacher._id });
    console.log(attendance);

  
    if (attendance.length === 0) {
      return res.status(404).json({ message: "Not Found" });
    }


    res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { findAttendanceTeacher };