import React from 'react';

const HeaderMenu = ({ isActive }) => {
   return (
      <div className={`header__menu ${isActive ? 'is-active' : ''}`}>
         <ul className="header__list">
            <li className="header__item">
               <a href="/">Featues</a>
            </li>
            <li className="header__item">
               <a href="/">Operations</a>
            </li>
            <li className="header__item">
               <a href="/">Testimonial</a>
            </li>
         </ul>

         <ul className="header__cta__list">
            <li className="header__cta__item">
               <a href="/">How it works</a>
            </li>
            <li className="header__cta__item">
               <a href="/" className="btn btn--white">
                  Sign in
               </a>
            </li>
            <li className="header__cta__item">
               <a href="/" className="btn btn--red">
                  Register
               </a>
            </li>
         </ul>
      </div>
   );
};

export default HeaderMenu;
