import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className = "footer" id="footer">
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>The copyrighted text at the bottom of a webpage is called a boilerplate. You can consolidate this content and put a summary on the page with a link to the copyright information on a different page </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91 4798493867</li>
                <li>contact@foodieflow.com</li>
             </ul>
        </div>
       </div>
       <hr/>
       <p className="footer-copyright">
       Copyright © 2024 foodieflow.com All Rights Reserved."
       </p>
    </div>
  )
}

export default Footer
