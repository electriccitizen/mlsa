import React from 'react';
import { Link } from 'gatsby';

const Button = (props) => {
  return (
    <div className="max-w-2xlHalf mx-auto">
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      <div className="flex flex-row flex-wrap justify-center -mx-2 -mb-4">
	     {props.content.map((buttonLink, index) => (
          <div className="px-2 mb-4" key={index}>
            {String(buttonLink.alias).includes('http') ? <a className="btn inline-block" href={buttonLink.uri} target="_blank" rel="noopener noreferrer">{buttonLink.title}</a>
              : String(buttonLink.alias) === '/user' ? <Link className="btn inline-block" to="/">{buttonLink.title}</Link>
              : <Link className="btn inline-block" to={buttonLink.alias}>{buttonLink.title}</Link>}
          </div>
        ))}
      </div>
    </div>
  )
};

export default Button;
