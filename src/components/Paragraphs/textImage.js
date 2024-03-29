import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const TextImage = (props) => {
  return (
    <div className="max-w-1080 mx-auto">
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      <div className="md:flex md:flex-row md:flex-wrap -mx-3">
        <div className={`px-3 mb-3 md:mb-0 md:w-1/2${String(props.placement) === 'right' ? ' md:order-2' : '' }`}>
          {props.link ?
            String(props.link).includes('http') ? <a className="block" href={props.link} aria-label={props.label} target="_blank" rel="noopener noreferrer"><GatsbyImage image={props.image} al={props.alt} /></a>
              : String(props.link) === '/user' ? <Link className="block" to="/" aria-label={props.label}><GatsbyImage image={props.image} alt={props.alt} /></Link>
              : <Link className="block" to={props.link} aria-label={props.label}><GatsbyImage image={props.image} alt={props.alt} /></Link>
          :
            <GatsbyImage image={props.image} alt={props.alt} />
          }
          {props.caption && <figcaption className="mx-auto max-w-2xlHalf mt-2 text-grey-dark italic text-center text-16">{props.caption}</figcaption>}
        </div>
        <div className="px-3 md:w-1/2 long-text">
          <div dangerouslySetInnerHTML={{ __html: props.text}} />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
