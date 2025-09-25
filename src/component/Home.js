import React from "react";
import "./Home.css"; // Import CSS file

export default function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FOODIE</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>feedback</li>
          <li>Contact</li>
          <li className="cart">🛒</li>
          <li>
            <button className="btn-book">Booking Now</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Favourite Food <br /> Delivered Hot & Fresh
          </h1>
          <p>
            Healthy switcher chefs do all the prep work, like peeling, chopping &
            marinating, so you can cook a fresh food.
          </p>
          <button className="btn-order">Order Now →</button>
        </div>
        <div className="hero-image">
          <img src="/Assets/f3.png" alt="Food Bowl" />
        </div>
      </section>
    </div>
  );
}
