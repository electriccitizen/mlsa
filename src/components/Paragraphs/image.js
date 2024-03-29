import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const Image = (props) => {
  return props.image && 
  <div className="max-w-1080 mx-auto">
    {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
    {props.link && props.image ?
      String(props.link).includes('http') ? <a className="block" href={props.link} aria-label={props.label} target="_blank" rel="noopener noreferrer"><GatsbyImage image={props.image} alt={props.alt} /></a>
        : String(props.link) === '/user' ? <Link className="block" to="/" aria-label={props.label}><GatsbyImage image={props.image} alt={props.alt} /></Link>
        : <Link className="block" to={props.link} aria-label={props.label}><GatsbyImage image={props.image} alt={props.alt} /></Link>
    : props.image ?
      <GatsbyImage image={props.image} alt={props.alt} />
    : ''
    }
      {props.caption && props.image && <figcaption className="mx-auto max-w-2xlHalf mt-2 text-grey-dark italic text-center">{props.caption}</figcaption>}
  </div>;
};

export default Image;