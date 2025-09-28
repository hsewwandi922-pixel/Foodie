import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">FaveDish</div>

      {/* Nav links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/order">Order Now 🛒</Link>
      </div>
    </nav>
  );
}

export default Navbar;
