import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", { email });
      if (res.data.success) {
        if (res.data.user.role === "student")
          navigate("/student-dashboard");
        else navigate("/teacher-dashboard");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ margin: "2rem" }}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;