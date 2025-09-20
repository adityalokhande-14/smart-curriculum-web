import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center mt-10">
      &copy; {new Date().getFullYear()} Smart Curriculum. All rights reserved.
    </footer>
  );
}

export default Footer;
