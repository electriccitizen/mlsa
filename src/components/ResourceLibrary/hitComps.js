import React from "react"
import { Highlight } from "react-instantsearch-dom"

export const ResourceHit = clickHandler => ({ hit }) => (
  <div>
    <a href={hit.url} onClick={clickHandler}>
      <h4 class="mb-0 mt-2">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </a>
    <div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} /></div>
)
