import React from 'react';
import { companyLogo } from '../assets/index';

const Company = () => {
   return (
      <section className="company">
         <div className="company__container container">
            <h4 className="company__title heading--l">
               The world's best companies rely on AMABank to make better design
               decisions
            </h4>
            <div className="company__companies">
               {companyLogo.map(logo => {
                  return (
                     <a
                        key={logo.id}
                        className="company__link"
                        href="/"
                        aria-label={logo.title}
                     >
                        <img
                           className="company__image"
                           src={logo.icon}
                           alt={logo.title}
                           width={logo.width}
                           height={logo.height}
                        />
                     </a>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Company;
