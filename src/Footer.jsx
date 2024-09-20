import React from 'react'
import './App.css'
const Footer = () => {
  return (
   <>
   <footer className='footer'>
       <div className="footer-container">
        <div className="footer-about-section">
            <h3>About Us</h3>
            <p>Sample UI which we are create with the help of React</p>
        </div>
        <div className="footer-section-links">
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Artist</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
             <div className="footer-contact-section">
                <h3>Contact</h3>
                <p>Email: website@123gmail.com</p>
                <p>Phone: +91 9000000000</p>
             </div>
       </div>
       <div className="footer-bottom">
          2024 My website | Designed by Ansh Sisodiya 
       </div>
   </footer>
   
   </>
  )
}

export default Footer