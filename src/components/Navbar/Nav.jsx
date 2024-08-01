
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from '../../App';
import "./nav.css";
import homeicon from "../../images/icons8-home-64 (1).png";
import themeimg from "../../images/dark-theme.svg";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const { theme, toggletheme } = useContext(themeContext);

  const handleLogoutClick = () => {
    onLogout();
  };

  const handleClick = () => {
    toggletheme();
  };

  return (
    <div className="main-nav-box">
      <h1 className="logo">DoIT</h1>
      <div className="nav-links">
        <NavLink to="/" className="homeimg">
          <img src={homeicon} alt="homeicon" />
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className="Link" to="/Register">
              Register
            </NavLink>
            <NavLink className="Link" to="/Login">
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLink className="Link" to="/Todo">Todo</NavLink>
            <NavLink className="Link" to="/Table">Table</NavLink>
            <NavLink className="Link" to="/" onClick={handleLogoutClick}>
              Logout
            </NavLink>
          </>
        )}
        <img className="themeimg" src={themeimg} alt="Theme toggle" type="button" onClick={handleClick} />
      </div>
      <style>{`
          body {
            background-color: ${theme};
            color: ${theme === 'white' ? 'black' : 'white'};
          }
        `}</style>
    </div>
  );
};

export default Navbar;
