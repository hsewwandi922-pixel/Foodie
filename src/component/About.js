import React from 'react';
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import './About.css';

export default function About() {
  return (
    <div className="page-content">
      {/* Main About content */}
      <div className='botomcen'>
        <LeftPane />
        <RightPane />
      </div>

      {/* Footer */}
      <div>
        <hr />
        <footer>favfood@gmail.com</footer>
      </div>
    </div>
  );
}
