import React from 'react';

const Text = (props) => {
  return (
    <div>
      <h2 className="h4">{props.header}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.content}} />
    </div>
  )
};

export default Text;