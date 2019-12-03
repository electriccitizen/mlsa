import React from 'react';
import { Link } from 'gatsby';
import ResultHitContent from './resultHitContent';

const ResultHit = (props) => {
  return (
    <div key={props.title} className="text-center mb-8 pb-8 border-b border-grey-midAlt md:text-left md:border-b-0 md:pb-0 md:px-2 md:w-1/3">
      {String(props.alias).includes('http') ?  
        <a className="resource-link" href={props.url} target="_blank" rel="noopener noreferrer">
          <ResultHitContent title={props.title} icon={props.icon} />
        </a>
      : String(props.alias) === '/user' ?
        <Link className="resource-link" to={props.alias}>
          <ResultHitContent title={props.title} icon={props.icon} />
        </Link>
      : 
        <Link className="resource-link" to={props.alias}>
          <ResultHitContent title={props.title} icon={props.icon} />
        </Link>
      }
      <div attribute="org" hit={props.hit} className="text-16 italic mb-3 text-grey-dark">{props.org}</div>
      <div attribute="description" hit={props.hit}  dangerouslySetInnerHTML={{ __html: props.description}} />
    </div>
         
  );
}

export default ResultHit;
