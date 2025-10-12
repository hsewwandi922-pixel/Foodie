import React from 'react';
import './RightPane.css';
import image02 from '../Assets/image02.png'; 

export default function RightPane() {
  return (
    <div className="rightpanebox">
      <div className="backimage">
        <img src={image02} alt="Decorative Background" />
      </div>
    </div>
  );
}
