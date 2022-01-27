import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div>
      <div className="weatherApp">
        Weather App
      </div>
      <nav className="navBar">
        
        <Link to="/about" className="link">
          <div id="about">About</div>
        </Link>
        
      </nav>
    </div>
  );
}

export default Nav;
