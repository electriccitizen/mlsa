import React from "react"
import { Highlight } from "react-instantsearch-dom"

export const ResourceHit = clickHandler => ({ hit }) => (
  <div>
  	<div>{hit.field_icon} test</div>
  	<h2 className="h3 mb-0 mt-2">
	    <a href={hit.url} onClick={clickHandler}>
	       <Highlight attribute="title" hit={hit} tagName="mark" />
	    </a>
    </h2>
    <div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} />
  </div>
)
