import React from "react";
import "./Contact.css"; 

function Contact() {
  return (
    <footer className="footer">
      <div className="subscribe">
        <h2>Have Question In Mind?<br />Let Us Help You</h2>
        <div className="subscribe-box">
          <input type="email" placeholder="yourmail@gmail.com" />
          <button>Submit</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="brand"></div>
        <div className="socials">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>

        <div className="links">
          <ul>
            <li>Quality</li>
            <li>Help</li>
            <li>Share</li>
            <li>Careers</li>
            <li>Feedback</li>
            <li>Work</li>
          </ul>
          <ul>
            <li>244-5333-7783</li>
            <li>hello@food.com</li>
            <li>press@food.com</li>
            <li>contact@food.com</li>
          </ul>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
