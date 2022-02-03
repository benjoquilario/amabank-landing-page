import React from 'react';
import OperationTabs from './OperationTabs';
import OperationButton from './OperationButton';

const Operation = () => {
   const { onHandleClick, isTransiton, operationDisplay, dataIndex } =
      OperationTabs();
   return (
      <section className="operation">
         <div className="operation__container container">
            <div className="operation__header">
               <h2 className="features__title heading--xl">Operation</h2>
               <h3 className="features__sub-title heading--x">
                  Everything as simple as possible, but no simpler.
               </h3>
            </div>
            <div className="operation__tabs">
               <OperationButton
                  onHandleClick={onHandleClick}
                  dataIndex={dataIndex}
               />
            </div>
            <div
               className={`operation__features ${
                  isTransiton ? 'transitioning' : ''
               }`}
            >
               <div className="operation__features__wrapper">
                  <div className="operation__features__img">
                     <img
                        src={operationDisplay.image}
                        alt={operationDisplay.title}
                     />
                  </div>
               </div>
               <div className="operation__features__info">
                  <h3 className="heading heading--operation">
                     {operationDisplay.title}
                  </h3>
                  <p className="paragraph paragraph--operation">
                     {operationDisplay.paragraph}
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Operation;
