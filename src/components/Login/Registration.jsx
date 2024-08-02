<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 3b635e1 (Your commit message)
import { NavLink, useNavigate } from "react-router-dom";
import "./registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [registerObject, setRegisterObject] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const existingRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
    existingRegistrations.push(registerObject);
    localStorage.setItem("registrations", JSON.stringify(existingRegistrations));

=======
>>>>>>> 3b635e1 (Your commit message)
    alert("Thank you! You are registered.");
    navigate("/Login");
  };

<<<<<<< HEAD
=======
useEffect(()=>{
  const existingRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
  setRegisterObject(existingRegistrations)
},[])
useEffect(()=>{
  localStorage.setItem("registrations", JSON.stringify(registerObject));
},[registerObject])


>>>>>>> 3b635e1 (Your commit message)
  const handleChange = (e) => {
    setRegisterObject({
      ...registerObject,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h1>Register Yourself</h1>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerObject.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerObject.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            value={registerObject.password}
            onChange={handleChange}
            required
          />
          <input className="register-button" type="submit" value="Register" />
        </form>
        <NavLink className="register-link" to="/Login">
          Already Registered? Please Login
        </NavLink>
      </div>
    </div>
  );
};

export default Registration;
