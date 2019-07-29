import React, { useState, useEffect, createRef } from "react"
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
  ScrollTo,
} from "react-instantsearch-dom"

import { RefinementList } from 'react-instantsearch-dom';
import { ClearRefinements } from 'react-instantsearch-dom';
import { CurrentRefinements } from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch/lite"
import { Pagination } from 'react-instantsearch-dom';
import { Root, HitsWrapper } from "./styles"

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

export default function ResourceLibrary({ indices, collapse, hitsAsGrid }) {
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

      <div className="text-center   md:justify-center">
          <h1>Resource Library</h1>
          <p class="mx-auto w-1/3">If we're gonna walk though the woods, we need a little path. Don't be afraid to make these big decisions. </p>
      </div>

      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
        routing="true"
        root={{ Root, props: { ref } }}
      >
      <div class="flex p-4 mx-auto w-1/3">
       <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      </div>
      <div class="flex p-4">
        <CurrentRefinements />
      </div>
      <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400 pr-8">
          <ClearRefinements clearsQuery />
          <h4 class="mb-0 mt-2">Crimes</h4>
          <RefinementList
            attribute='crime'
            limit={20}
          />
          <h4 class="mb-0 mt-2">Related issues</h4>
          <RefinementList
            attribute='issue'
            limit={20}
          />
          <h4 class="mb-0 mt-2">Categories</h4>
          <RefinementList
            attribute='category'
            limit={20}
          />
          <h4 class="mb-0 mt-2">Areas served</h4>
          <RefinementList
            attribute='county'
            limit={5}
            showMore
            showMoreLimit={60}
          />
          <h4 class="mb-0 mt-2">Resource type</h4>
          <RefinementList attribute='type'/>
        </div>
        <div class="w-2/3 bg-gray-500 p-4" >
          <ScrollTo>
          <HitsWrapper  asGrid={hitsAsGrid}>
            {indices.map(({ name, title, hitComp }) => (
              <Index key={name} indexName={name}>
                <header>
                  <Stats />
                </header>
                <Results>
                  <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
                </Results>
              </Index>
            ))}
          </HitsWrapper>
          </ScrollTo>
        </div>
      </div>
      <div class="flex">
        <div id="pagination">
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
        </div>
      </InstantSearch>
    </>
  )
}
