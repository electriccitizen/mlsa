import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Image = (props) => {
  return (
    <div className="max-w-1080 mx-auto">
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      {props.link ?
        String(props.link).includes('http') ? <a className="block" href={props.link} aria-label={props.label} target="_blank" rel="noopener noreferrer"><Img fluid={props.image} atl={props.alt} /></a>
          : String(props.link) === '/user' ? <Link className="block" to="/" aria-label={props.label}><Img fluid={props.image} atl={props.alt} /></Link>
          : <Link className="block" to={props.link} aria-label={props.label}><Img fluid={props.image} atl={props.alt} /></Link>
      :
        <Img fluid={props.image} atl={props.alt} />
      }
	    {props.caption && <figcaption className="mx-auto max-w-2xlHalf mt-2 text-grey-dark italic text-center">{props.caption}</figcaption>}
    </div>
  )
};

export default Image;