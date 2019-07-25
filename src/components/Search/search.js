import React, { useState, useEffect, createRef } from "react"
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom"

import { RefinementList } from 'react-instantsearch-dom';
import { ClearRefinements } from 'react-instantsearch-dom';
import { CurrentRefinements } from 'react-instantsearch-dom';
import { MenuSelect } from 'react-instantsearch-dom';
import { Menu } from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch/lite"
import { Pagination } from 'react-instantsearch-dom';

import { Root, HitsWrapper, PoweredBy } from "./styles"
import Input from "./input"
import * as hitComps from "./hitComps"

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler()
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside)
    }
  })
}

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  useClickOutside(ref, () => setFocus(false))
  return (
    <>

    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <div class="flex">
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      </div>
      <div class="flex">
      <CurrentRefinements clearsQuery />
        <ClearRefinements clearsQuery />
      </div>

      <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400">
          <RefinementList attribute='field_crime.name' />
        </div>
        <div class="w-2/3 bg-gray-500">
          <HitsWrapper  asGrid={hitsAsGrid}>
            {indices.map(({ name, title, hitComp }) => (
              <Index key={name} indexName={name}>
                <header>
                  <h3>{title}</h3>
                  <Stats />
                </header>
                <Results>
                  <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
                </Results>
              </Index>
            ))}
          </HitsWrapper>
        </div>
    </div>
      <div class="flex">
        <Pagination
          padding={5}
          translations={{
            previous: '‹',
            next: '›',
            first: '«',
            last: '»',
            page(currentRefinement) {
              return currentRefinement;
            },
            ariaPrevious: 'Previous page',
            ariaNext: 'Next page',
            ariaFirst: 'First page',
            ariaLast: 'Last page',
            ariaPage(currentRefinement) {
              return `Page ${currentRefinement}`;
            },
          }}
        />
      </div>



    </InstantSearch>
      </>
  )
}
