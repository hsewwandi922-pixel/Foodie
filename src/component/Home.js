import React from "react";
import "./Home.css"; // Import CSS file

export default function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FAVEDISH</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>feedback</li>
          <li>Contact</li>
          <li className="cart">🛒</li>
          <li>
            <button className="btn-book">Order Now</button>
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
            Imagine your favourite dish, perfectly cooked, arriving right when you want it. We handle all the details from sourcing quality ingredients to rapid, insulated delivery so all you have to do is unbox a hot, fresh, and delicious meal.


          </p>
          <button className="btn-order">Order Now →</button>
        </div>
        <div className="hero-image">
          <img src="/public/Assests/f3.png" alt="Food Bowl" />
        </div>
      </section>
    </div>
  );
}
