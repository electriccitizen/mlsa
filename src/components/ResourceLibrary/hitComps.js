import React from "react";
import { Link } from 'gatsby';
import ResultHitContent from '../Triage/resultHitContent';


export const ResourceHit = clickHandler => ({ hit }) => (
  <div className="text-center mb-8 md:text-left">
	  {String(hit.alias).includes('http') ?
			<a className="resource-link" href={hit.url} onClick={clickHandler} target="_blank" rel="noopener noreferrer">
				<ResultHitContent icon={hit.icon[0]} highlight='yes' hit={hit} />
			</a>
		: String(hit.alias) === '/user' ?
			<Link className="resource-link" to={hit.alias} onClick={clickHandler}>
				<ResultHitContent icon={hit.icon[0]} highlight='yes' hit={hit} />
			</Link>
		:
			<Link className="resource-link" to={hit.alias} onClick={clickHandler}>
				<ResultHitContent icon={hit.icon[0]} highlight='yes' hit={hit} />
			</Link>
		}
		<div attribute="org" hit={hit} className="text-16 italic mb-3 text-grey-dark">{hit.org}</div>
		<div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} />
  </div>
)
