import React from 'react';

const Text = (props) => {
  return (
    <div>
      <h2 className="h3">{props.header}</h2>
      <div className="mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: props.content}} />
    </div>
  )
};

export default Text;