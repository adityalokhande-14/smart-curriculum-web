import React, { useState } from "react";
import axios from "axios";

function AttendanceMark() {
  const [studentEmail, setStudentEmail] = useState("");
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");

  const markAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/attendance/mark", {
        studentEmail, classId, date
      });
      alert(res.data.message);
    } catch (err) {
      alert("Attendance marking failed");
    }
  };

  return (
    <form onSubmit={markAttendance} style={{ margin: "2rem" }}>
      <h2>Mark Attendance</h2>
      <input type="email" value={studentEmail} onChange={e => setStudentEmail(e.target.value)} placeholder="Student Email" required />
      <input type="text" value={classId} onChange={e => setClassId(e.target.value)} placeholder="Class ID" required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button type="submit">Mark Attendance</button>
    </form>
  );
}

export default AttendanceMark;