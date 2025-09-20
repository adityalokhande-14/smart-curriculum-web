import React, { useState } from "react";
import axios from "axios";

function AttendanceLive() {
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/api/attendance/live?classId=${classId}&date=${date}`);
      setAttendance(res.data.attendance);
    } catch (err) {
      alert("Fetching live attendance failed");
    }
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Live Attendance</h2>
      <form onSubmit={fetchAttendance}>
        <input type="text" value={classId} onChange={e => setClassId(e.target.value)} placeholder="Class ID" required />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        <button type="submit">Fetch Attendance</button>
      </form>
      <ul>
        {attendance.map((a, i) => (
          <li key={i}>{a.studentEmail}: {a.present ? "Present" : "Absent"} ({a.markedAt})</li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceLive;