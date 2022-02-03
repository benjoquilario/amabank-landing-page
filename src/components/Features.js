import React from 'react';
import { FeatureData } from '../data/data';

const Features = () => {
   return (
      <section className="features">
         <div className="features__container container">
            {FeatureData.map((feature, index) => {
               return (
                  <div className="features__feature" key={index}>
                     <div
                        className={`features__feature__img features__feature__img--${
                           index + 1
                        }`}
                     ></div>
                     <div className="features__feature__text">
                        <span className="features__feature--small">
                           {feature.span}
                        </span>
                        <h3 className="heading heading--features features__feature__title">
                           {feature.title}
                        </h3>
                        <p
                           className="paragraph paragraph--features"
                           dangerouslySetInnerHTML={{
                              __html: feature.paragraph,
                           }}
                        />
                        <a href="/" className="btn btn--more">
                           Learn More
                        </a>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Features;

/*
            <div className="features__feature">
               <div className="features__feature__img features__feature__img--1"></div>
               <div className="features__feature__text">
                  <div className="features__feature__icon">
                     <img src={computer} />
                  </div>
                  <h3 className="heading heading--features features__feature__title">
                     100% digital bank
                  </h3>
                  <p className="paragraph paragraph--features">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde alias sint quos? Accusantium a fugiat porro reiciendis
                     saepe quibusdam debitis ducimus.
                  </p>
               </div>
            </div>
            <div className="features__feature">
               <div className="features__feature__text">
                  <div className="features__feature__icon">
                     <img src={creditCard} />
                  </div>
                  <h3 className="heading heading--features features__feature__title">
                     Free debit card included
                  </h3>
                  <p
                     className="paragraph paragraph--features"
                     style={{ marginBottom: '12px' }}
                  >
                     AMABank products and services are completed and varied for
                     all segments according to user needs
                  </p>
                  <p className="paragraph paragraph--features">
                     AMABank continues to innovate to develop products that are
                     in line with times to meet users needs.
                  </p>
               </div>
               <div className="features__feature__img features__feature__img--2"></div>
            </div>
            <div className="features__feature">
               <div className="features__feature__img features__feature__img--3"></div>
               <div className="features__feature__text">
                  <div className="features__feature__icon">
                     <img src={grow} />
                  </div>
                  <h3 className="heading heading--features features__feature__title">
                     Real-time Currency Balance Check
                  </h3>
                  <p className="paragraph paragraph--features">
                     Have you ever finally just gave in to the temptation and
                     read your horoscope in newspaper
                  </p>
               </div>
            </div>
            */
