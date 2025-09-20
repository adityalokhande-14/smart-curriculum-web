import React, { useState } from "react";
import axios from "axios";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function AttendanceLive() {
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:5000/api/attendance/live?classId=${classId}&date=${date}`
      );
      setAttendance(res.data.attendance);
    } catch (err) {
      alert("Fetching live attendance failed");
    }
  };

  return (
    <>
      <Header role="student" />
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-6">Live Attendance</h2>

        {/* Form */}
        <form
          onSubmit={fetchAttendance}
          className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row gap-4 items-center"
        >
          <input
            type="text"
            value={classId}
            onChange={e => setClassId(e.target.value)}
            placeholder="Class ID"
            required
            className="p-3 border border-gray-300 rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Fetch Attendance
          </button>
        </form>

        {/* Attendance Table */}
        {attendance.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-green-500 text-white">
                  <th className="px-4 py-2">Student Email</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Marked At</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((a, i) => (
                  <tr key={i} className="text-center border-b">
                    <td className="px-4 py-2">{a.studentEmail}</td>
                    <td
                      className={`px-4 py-2 font-bold ${
                        a.present ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {a.present ? "Present" : "Absent"}
                    </td>
                    <td className="px-4 py-2">{a.markedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600 mt-4">No attendance fetched yet.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AttendanceLive;
