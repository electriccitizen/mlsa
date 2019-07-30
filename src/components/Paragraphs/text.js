import React from 'react';

const Text = (props) => {
  return (
    <div>
      <h1>Test</h1>
      <h2 className="h4">{props.header}</h2>
      <div>{props.content}</div>
    </div>
  )
};

export default Text;