import React from "react";
import { connectHighlight } from 'react-instantsearch-dom';

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span className="highlight-result">
      {parsedHit.map(
        (part, index) =>
          part.isHighlighted ? (
            <mark key={index} dangerouslySetInnerHTML={{ __html:part.value}} />
          ) : (
            <span key={index} dangerouslySetInnerHTML={{ __html:part.value}} />
        )
      )}
    </span>
  );
};

const CustomHighlight = connectHighlight(Highlight);

export default CustomHighlight;
