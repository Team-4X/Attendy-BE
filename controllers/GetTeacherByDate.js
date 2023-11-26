const AttendanceTeacher = require("../models/TeacherAttendance");
const Staff = require("../models/Staff");

exports.findByDate = async (req, res) => {
    const { date } = req.params;

    try {
        const attendanceDocuments = await AttendanceTeacher.find({ date: date });


        if (attendanceDocuments.length == 0) {
            return res.status(404).json({ message: "Attendance data not found" });
        }

        const attendanceDataWithTeacherInfo = [];

        for (const attendanceDocument of attendanceDocuments) {

            const attendanceDataWithTeacher = {
                date: attendanceDocument.date,
                attendance: attendanceDocument.attendance,
                teacherName: attendanceDocument.teacherName,
                teacherId: attendanceDocument.teacherID

            };

            attendanceDataWithTeacherInfo.push(attendanceDataWithTeacher);
        }

        return res.status(200).json(attendanceDataWithTeacherInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};