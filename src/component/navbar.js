import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">FaveDish</div>

      

      {}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/work">How it Works</Link>
      </div>
    </nav>
  );
};

export default Navbar;
