import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const TextImage = (props) => {
  return (
    <div className="max-w-1080 mx-auto">
      {props.header && <h2 className="h3">{props.header}</h2>}
      <div className="md:flex md:flex-row md:flex-wrap -mx-3">
        <div className={`px-3 mb-3 md:mb-0 md:w-1/2${String(props.placement) === 'right' ? ' md:order-2' : '' }`}>
          {props.link ?
            String(props.link).includes('entity') ? <Link className="block" to={props.link} aria-label={props.label}><Img fluid={props.image} atl={props.alt} /></Link>
              : <a className="block" href={props.link} target="_blank" rel="noopener noreferrer" aria-label={props.label}><Img fluid={props.image} atl={props.alt} /></a>
          :
            <Img fluid={props.image} atl={props.alt} />
          }
          {props.caption && <figcaption className="mx-auto max-w-2xlHalf mt-2 text-grey-dark italic text-center text-16">{props.caption}</figcaption>}
        </div>
        <div className="px-3 md:w-1/2 long-text">
          <div dangerouslySetInnerHTML={{ __html: props.text}} />
        </div>
      </div>
    </div>
  )
};

export default TextImage;