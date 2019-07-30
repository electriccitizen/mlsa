import React from "react"
import { Highlight } from "react-instantsearch-dom"

export const ResourceHit = clickHandler => ({ hit }) => (
  <div>
  	<div>{hit.type.field_icon} 1</div>
  	<div>{hit.field_icon} 2</div>
  	<div>{hit.icon} 2</div>
  	<h2 className="h3 mb-0 mt-2">
	    <a href={hit.url} onClick={clickHandler}>
	       <Highlight attribute="title" hit={hit} tagName="mark" />
	    </a>
    </h2>
    <div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} />
  </div>
)
