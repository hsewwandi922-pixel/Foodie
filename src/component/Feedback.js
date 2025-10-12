import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="work-section-wrapper">
      
      
      <div className="work-section-top" style={{ textAlign: "center" }}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       <div className="work-section-top" style={{ textAlign: "center" }}><h1>What They Are Saying</h1></div>
        
      <br/>
      <br/>
      <br/>

         <img src={ProfilePic} alt="" />
         <h2>John Doe</h2>
         <br/>
         <br/>
        <p 
          className="primary-text" 
          style={{ maxWidth: "700px", margin: "0 auto" }} 
        >
          This is my go-to food delivery service! The app is super easy to use, and my order was delivered piping hot and incredibly fast. The food itself was delicious and exactly what I craved. Highly recommend for a quick and tasty meal!
        </p>
      </div>

      {
      }
      <div 
        className="testimonial-section-bottom" 
        style={{ 
          textAlign: "center", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" 
        }}
      >
        
        
        {}
       
        
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          
        </div>
        
      </div>
    </div>
  );
};

export default Feedback;