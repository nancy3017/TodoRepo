// Login.js
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
    const user = storedRegistrations.find(
      (reg) => reg.email === loginData.email && reg.password === loginData.password
    );

    if (user) {
      onLogin();
      navigate("/Todo");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="main-regis-box">
      <div className="Regis-box">
        <h1 className="login-heading">Login</h1>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <NavLink className="login-link" to="/Registration">
            Don't have an account? Please Register
          </NavLink>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;

