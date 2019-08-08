import React from 'react';
import AccordionItem from './accordionItem';

const Accordions = (props) => {
  return (
    <div className="max-w-2xlHalf mx-auto -mb-4">
      <h2 className="h3">{props.header}</h2>
      {props.content.map((accordionItem, index) => (
        <AccordionItem 
          header={accordionItem.field_accordion_header}
          key={accordionItem.drupal_id}
          id={accordionItem.drupal_id}
          content={accordionItem.field_text.processed}
        />
      ))}
    </div>
  )
};

export default Accordions;
