import React from "react";
import { Link } from "react-router-dom";

function Header({ role }) {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Smart Curriculum</h1>
        <nav className="space-x-4">
          <Link className="hover:text-gray-200" to={role === "teacher" ? "/teacher-dashboard" : "/student-dashboard"}>
            Dashboard
          </Link>
          <Link className="hover:text-gray-200" to={role === "teacher" ? "/attendance-mark" : "/attendance-live"}>
            {role === "teacher" ? "Mark Attendance" : "Live Attendance"}
          </Link>
          <Link className="hover:text-gray-200" to="/">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
