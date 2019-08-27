import React from 'react';

const Text = (props) => {
  return (
    <div>
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      <div className="mx-auto max-w-2xlHalf long-text" dangerouslySetInnerHTML={{ __html: props.content}} />
    </div>
  )
};

export default Text;