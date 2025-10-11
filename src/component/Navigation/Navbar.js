import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">FavDish</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='SearchIcon'/>
                <input placeholder="search" className="searchInput" />
            </div>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="navBarLink">Home</span>
            <span className="navBarLink">About</span>
            <span className="navBarLink">Reviews</span>
            <span className="navBarLink">Contact</span>
            <span className="navBarLink">Work</span>
          </div>
          <div className="nabBarIcons">
            <div className="navBarIcon">
               <HomeIcon/>
            </div>
            <div className="navBarIcon">
               <InfoIcon/>
            </div>
            <div className="navBarIcon">
               <ReviewsIcon/>
            </div>
            <div className="navBarIcon">
              <ContactSupportIcon/>
            </div>
            <div className="navBarIcon">
              <WorkIcon/>
            </div>
          </div>
        </div>
    </div>
  )
}
