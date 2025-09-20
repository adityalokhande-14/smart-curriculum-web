import React, { useState } from "react";
import axios from "axios";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function AttendanceMark() {
  const [studentEmail, setStudentEmail] = useState("");
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");

  const markAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/attendance/mark", {
        studentEmail,
        classId,
        date
      });
      alert(res.data.message);
      // Optionally reset form
      setStudentEmail("");
      setClassId("");
      setDate("");
    } catch (err) {
      alert("Attendance marking failed");
    }
  };

  return (
    <>
      <Header role="teacher" />
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-6">Mark Attendance</h2>

        <form
          onSubmit={markAttendance}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            placeholder="Student Email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            placeholder="Class ID"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Mark Attendance
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AttendanceMark;
