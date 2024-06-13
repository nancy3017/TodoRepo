import React, { useState, useEffect,createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Todo from "./components/Main/Todo";
import Registration from "./components/Login/Registration";
import Login from "./components/Login/Login";
import Table from "./components/Main/Table";
import Navbar from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


export const themeContext=createContext('white')
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [theme,setTheme]=useState('white')
  
  const toggletheme=()=>{
    setTheme(prevname=>prevname==='black'? 'white':'black')
  }

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/";
  };

  return (
    <themeContext.Provider value={{theme:theme,toggletheme}}>
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Registration />} />
          <Route
            path="/Login"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/Todo" />
              )
            }
          />
          <Route
            path="/Todo"
            element={isLoggedIn ? <Todo /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Table"
            element={isLoggedIn ? <Table /> : <Navigate to="/Login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    </themeContext.Provider>
  );
};

export default App;





 
  