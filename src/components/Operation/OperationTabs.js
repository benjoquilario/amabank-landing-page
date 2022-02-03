import { useRef, useState } from 'react';
import { operationData } from '../../data/data';

const OperationTabs = () => {
   const [isTransiton, setIsTransition] = useState(false);
   const [operationDisplay, setOperationDisplay] = useState(operationData[0]);
   const dataIndex = useRef(0);
   const transition = 1000;

   const onHandleClick = event => {
      const currIndex = +event.target.dataset.index;
      if (isTransiton || dataIndex.current === currIndex) return;

      dataIndex.current = currIndex;
      setIsTransition(!isTransiton);

      setTimeout(() => {
         setIsTransition(false);
      }, transition);

      setTimeout(() => {
         setOperationDisplay(operationData[currIndex]);
      }, transition / 3);

      return currIndex;
   };

   return { onHandleClick, isTransiton, operationDisplay, dataIndex };
};

export default OperationTabs;
