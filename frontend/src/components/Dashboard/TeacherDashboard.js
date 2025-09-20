import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function TeacherDashboard() {
  return (
    <>
      <Header role="teacher" />
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-6">Teacher Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mark Attendance Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Mark Attendance</h3>
            <p>Mark attendance for your students here.</p>
          </div>

          {/* Class Analytics Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Class Analytics</h3>
            <p>View performance, attendance stats, and reports.</p>
          </div>

          {/* Assignments Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Assignments</h3>
            <p>Create, review, and track student assignments.</p>
          </div>

          {/* Upcoming Tasks Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-lg mb-2">Upcoming Tasks</h3>
            <p>Check upcoming events, deadlines, and class activities.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeacherDashboard;
