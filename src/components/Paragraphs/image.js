import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Image = (props) => {
  return (
    <div className="max-w-1080 mx-auto">
      {props.header && <h2 className="h3">{props.header}</h2>}
      {props.link ?
        String(props.link).includes('entity') ? <Link className="block" to={props.link}><Img fluid={props.image} atl={props.alt} /></Link>
          : <a className="block" href={props.link} target="_blank" rel="noopener noreferrer"><Img fluid={props.image} atl={props.alt} /></a>
      :
        <Img fluid={props.image} atl={props.alt} />
      }
	    {props.caption && <figcaption className="mx-auto max-w-2xlHalf mt-2 text-grey-mid italic text-center text-16">{props.caption}</figcaption>}
    </div>
      
  )
};

export default Image;