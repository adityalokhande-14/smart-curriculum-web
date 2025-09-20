import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    collegeCode: "",
    role: "student"
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/register", form);
      if (res.data.success) navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ margin: "2rem" }}>
      <h2>Register</h2>
      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" />
      <input name="password" type="password" value={form.password} onChange={handleChange} required placeholder="Password" />
      <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Name" />
      <input name="collegeCode" type="text" value={form.collegeCode} onChange={handleChange} required placeholder="College Code" />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;