import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from '../../components/RightPane/RightPane'
import './About.css';
export default function About() {
  return (
    <>
    <Navbar/>
       < div className='botomcen'>
          <LeftPane/>
          <RightPane/>
       </div>
       <div>
       <hr></hr> <footer>favfood@gmail.com</footer>
       </div>
    </>
  )
}
