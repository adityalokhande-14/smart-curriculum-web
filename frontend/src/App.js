import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import StudentDashboard from "./components/Dashboard/studentDashboard";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard";
import AttendanceMark from "./components/Attendance/AttendanceMark";
import AttendanceLive from "./components/Attendance/AttendanceLive";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/attendance/mark" element={<AttendanceMark />} />
        <Route path="/attendance/live" element={<AttendanceLive />} />
      </Routes>
    </Router>
  );
}

export default App;