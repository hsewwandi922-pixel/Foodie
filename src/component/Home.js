import React from "react";
import "./Home.css"; // Import CSS file
import f3 from "../Assets/f3.png"; // make sure folder name is Assets

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Favourite Food <br /> Delivered Hot & Fresh
          </h1>
          <p>
            Imagine your favourite dish, perfectly cooked, arriving right when you want it.
            We handle all the details from sourcing quality ingredients to rapid, insulated delivery
            so all you have to do is unbox a hot, fresh, and delicious meal.
          </p>
          <button className="btn-order">How it Works →</button>
        </div>
        <div className="hero-image">
          <img src={f3} alt="Food Bowl" /> {/* use imported variable */}
        </div>
      </section>
    </div>
  );
}
