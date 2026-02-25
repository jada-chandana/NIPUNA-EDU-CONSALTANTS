import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/nipuna.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <span>NIPUNA EDU CONSALTANTS</span>
        </div>

        {/* Hamburger */}
        <div 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          
          <li><a href="#why" onClick={() => setIsOpen(false)}>Why Us</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <button className="nav-btn mobile-btn">
              Book Consultation
            </button>
          </li>
        </ul>

        {/* Desktop Button */}
        
      </div>
    </nav>
  );
};

export default Navbar;