import React from 'react';


const ResultCounter = (props) => {
  return (
    <div className={`mb-8 pb-2 border-b border-grey-mid${props.classes}`}>Resources Available: <strong className="text-22">{props.counter}</strong></div>
  );
}

export default ResultCounter;
