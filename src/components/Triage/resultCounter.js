import React from 'react';


const ResultCounter = (props) => {
  return (
    <div className={`mb-8 pb-2 text-20${props.classes}`}>{props.counter} results available</div>
  );
}

export default ResultCounter;
