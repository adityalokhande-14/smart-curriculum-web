import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function StudentDashboard() {
  return (
    <>
      <Header role="student" />
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Attendance Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Attendance</h3>
            <p>View your attendance records here.</p>
          </div>

          {/* Assignments Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Assignments</h3>
            <p>Check your assignments and submissions.</p>
          </div>

          {/* Schedule Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Schedule</h3>
            <p>See your class schedule and timetable.</p>
          </div>

          {/* Activities Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Activities</h3>
            <p>Check your upcoming activities and events.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudentDashboard;
