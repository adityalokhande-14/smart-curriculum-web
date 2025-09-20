const db = require('../firebase/firebaseConfig');

exports.markAttendance = async (req, res) => {
  const { studentEmail, classId, date } = req.body;
  try {
    await db.collection('attendance').doc(date).collection(classId).doc(studentEmail).set({
      present: true,
      markedAt: new Date().toISOString()
    });
    return res.status(200).json({ success: true, message: "Attendance marked!" });
  } catch (e) {
    return res.status(500).json({ message: e.message, success: false });
  }
};

exports.getLiveAttendance = async (req, res) => {
  const { classId, date } = req.query;
  try {
    const snapshot = await db.collection('attendance').doc(date).collection(classId).get();
    const attendanceList = [];
    snapshot.forEach(doc => attendanceList.push({ ...doc.data(), studentEmail: doc.id }));
    return res.status(200).json({ attendance: attendanceList });
  } catch (e) {
    return res.status(500).json({ message: e.message, success: false });
  }
};