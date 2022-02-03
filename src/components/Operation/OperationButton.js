import React from 'react';
import { buttonOperation } from '../../data/OperationData';

const OperationButton = ({ onHandleClick, dataIndex }) => {
   return (
      <React.Fragment>
         {buttonOperation.map((btn, index) => {
            return (
               <button
                  className={`btn ${
                     dataIndex.current === index
                        ? 'operation__tabs__choice tabs__active'
                        : 'operation__tabs__choice'
                  }`}
                  data-index={index}
                  onClick={onHandleClick}
                  key={index}
               >
                  {btn.btnText}
               </button>
            );
         })}
      </React.Fragment>
   );
};

export default OperationButton;
