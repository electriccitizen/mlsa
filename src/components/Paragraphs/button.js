import React from 'react';
import { Link } from 'gatsby';

const Button = (props) => {
  return (
    <div className="max-w-2xlHalf mx-auto">
      {props.header && <h2 className="h3">{props.header}</h2>}
      <div className="flex flex-row flex-wrap justify-center -mx-2 -mb-4">
	      {props.content.map((buttonLink, index) => (
	      	<div className="px-2 mb-4" key={index}>
	      		{String(buttonLink.uri).includes('entity') ? <Link className="btn inline-block" to={buttonLink.uri}>{buttonLink.title}</Link>
	            : <a className="btn inline-block" href={buttonLink.uri} target="_blank" rel="noopener noreferrer">{buttonLink.title}</a>}
					</div>
	      ))}
      </div>
    </div>
  )
};

export default Button;