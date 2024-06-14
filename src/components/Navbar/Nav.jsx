import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from '../../App'
import "./nav.css";
import homeicon from "../../images/icons8-home-64 (1).png";
import themeimg from "../../images/dark-theme.svg"

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLogoutClick = () => {
    onLogout();
  };
  const {theme,toggletheme}=useContext(themeContext)
  const handleClick=()=>{
    toggletheme()
  }

  return (
    <div className="main-nav-box">
      <h1>DoIT</h1>
      <div>
        <NavLink to="/">
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
      </div>
      <img className="themeimg" src={themeimg} alt="img" type="button" onClick={handleClick}/>
      <style>{`
          body {
            background-color: ${theme === 'black' ? 'white' : 'black'};
            color: ${theme === 'black' ? 'black' : 'white'};
          }
        `}</style>
    </div>
  );
};

export default Navbar;
