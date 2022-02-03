import React, { useState, useEffect } from 'react';
import HeaderMenu from './HeaderMenu';
import logo from '../../assets/img/logo.png';

const Header = () => {
   const [click, setClick] = useState(false);

   const menuOpen = () => setClick(!click);

   useEffect(() => {
      if (click) document.body.classList.add('no-scroll');
      else document.body.classList.remove('no-scroll');
   }, [click]);

   return (
      <header className="header">
         <div className="header__container container">
            <a href="/" className="header__logo">
               <img
                  src={logo}
                  alt="AMA Bank - Home"
                  className="header__logo__image"
               />
               <span className="header__logo__text"> BANK </span>
            </a>
            <nav className="nav">
               <button
                  className={`btn btn--menu ${click ? 'active' : ''}`}
                  aria-label="menu toggle"
                  aria-expanded={click ? true : false}
                  onClick={menuOpen}
               >
                  <span className="btn--menu__bar"></span>
                  <span className="btn--menu__bar"></span>
                  <span className="btn--menu__bar"></span>
               </button>
               <HeaderMenu isActive={click} />
            </nav>
            <span className={`nav__overlay ${click ? 'show' : ''}`}></span>
         </div>
      </header>
   );
};

export default Header;
