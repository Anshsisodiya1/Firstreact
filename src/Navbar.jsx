import React from 'react'
import './App.css'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">My Logo </div>
        <div className="menu">
        <ul>
          <li>Home</li>
          <li>Artist</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar