import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  // ======================= Log out functionality =======================
  const navigate = useNavigate()
  function logOut() {
    navigate('/login')
    localStorage.removeItem("isLoggedIn")
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-text">Logo</span>
      </div>
      <div className="navbar-right">
        <button className="navbar-button" onClick={logOut}>Log-out</button>
      </div>
    </nav>
  );
}

export default Navbar;
