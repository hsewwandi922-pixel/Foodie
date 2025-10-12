import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 
import f3 from "../Assets/f3.png"; 

export default function Home() {
  const navigate = useNavigate();

  
  const handleOrderClick = () => {
    navigate("/Ordernow"); 
  };

  return (
    <div className="page-content">
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Favourite Food <br /> Delivered Hot & Fresh
          </h1>
          <p>
            Imagine your favourite dish, perfectly cooked, arriving right when you want it.
            We handle all the details — from sourcing quality ingredients to rapid, insulated delivery —
            so all you have to do is unbox a hot, fresh, and delicious meal.
          </p>

          {}
          <button className="btn-order" onClick={handleOrderClick}>
            Order Now →
          </button>
        </div>

        {}
        <div className="hero-image">
          <img src={f3} alt="Food Bowl" />
        </div>
      </section>
    </div>
  );
}
