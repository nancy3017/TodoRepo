
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 3b635e1 (Your commit message)
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const [user,setUser]=useState(null)
>>>>>>> 3b635e1 (Your commit message)
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
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
=======
    if (
      user &&
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      alert("Login successful!");
      onLogin();
      navigate("/Todo");
    } else {
      alert("Invalid email or password");
    }

  }
  useEffect(() => {
    const storedRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
    if (storedRegistrations) {
      setUser(storedRegistrations)  
    }  
  },[]);
    
>>>>>>> 3b635e1 (Your commit message)

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
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
