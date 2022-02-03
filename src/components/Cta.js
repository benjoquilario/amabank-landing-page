import React from 'react';

const Cta = () => {
   return (
      <section className="cta">
         <div className="cta__container container">
            <div className="cta__title">
               <h3 className="cta__header">
                  The best day to join AMABank was one year ago. The second best
                  is today!
               </h3>
            </div>
            <button className="btn btn--open">
               Open your free account today
            </button>
         </div>
      </section>
   );
};

export default Cta;
