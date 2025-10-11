import React from "react";
import "./work.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHandPointUp, faTruckFast } from '@fortawesome/free-solid-svg-icons';

export default function Work() {
  return (
    <div className="page-content">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-description">
          Eating healthy has never been easier. Simply choose your meals, set your delivery schedule, and enjoy fresh food delivered straight to your door.
        </p>

        <div className="cards-container">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-utensils-slash"></i>
            </div>
            <h3 className="card-title">Pick Meals</h3>
            <p className="card-description">
              Browse our menu and select meals that suit your taste and lifestyle. From hearty favorites to light options, we have something for everyone.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-hand-point-up"></i>
            </div>
            <h3 className="card-title">Choose How Often</h3>
            <p className="card-description">
              Set a delivery schedule that works best for you. Whether daily, weekly, or occasional, you have full control over your meal plan.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3 className="card-title">Fast Deliveries</h3>
            <p className="card-description">
              Enjoy fresh, hot meals delivered quickly and reliably. Our delivery team ensures your food arrives on time and ready to enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
