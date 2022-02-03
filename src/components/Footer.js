import React from 'react';
import logo from '../assets/img/logo.png';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <div className="footer__logo">
               <a href="/" className="header__logo">
                  <img
                     src={logo}
                     alt="AMA Bank - Home"
                     className="header__logo__image"
                  />
                  <span className="header__logo__text"> BANK </span>
               </a>
               <p>AMABank located in downtown Miami</p>{' '}
               <span>305-123-2341</span>
            </div>
            <nav className="footer__nav">
               <div className="footer__nav__nav">
                  <h4>Contact Us</h4>
                  <ul className="footer__nav--list">
                     <li>
                        <a href="/">Contact</a>
                     </li>
                     <li>
                        <a href="/">Support</a>
                     </li>
                     <li>
                        <a href="/">Sponsorships</a>
                     </li>
                  </ul>
               </div>
               <div className="footer__nav__nav">
                  <h4>Memberships</h4>
                  <ul className="footer__nav--list">
                     <li>
                        <a href="/">Contact</a>
                     </li>
                     <li>
                        <a href="/">Support</a>
                     </li>
                     <li>
                        <a href="/">Sponsorships</a>
                     </li>
                  </ul>
               </div>
               <div className="footer__nav__nav">
                  <h4>Social Media</h4>
                  <ul className="footer__nav--list">
                     <li>
                        <a href="/">Contact</a>
                     </li>
                     <li>
                        <a href="/">Support</a>
                     </li>
                     <li>
                        <a href="/">Sponsorships</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </footer>
   );
};

export default Footer;
