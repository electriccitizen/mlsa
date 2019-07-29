import React from "react"
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

import Input from "./input"
import * as hitComps from "./hitComps"

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

export default function ResourceLibrary({ indices, collapse, hitsAsGrid }) {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  return (
    <>
      <div className="text-center">
          <h1>Resource Library</h1>
          <h2>If we're gonna walk though the woods, we need a little path. Don't be afraid to make these big decisions.</h2>
      </div>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
      >
      <div>
        <Input />
      </div>
      <div>
        <CurrentRefinements />
        <ClearRefinements clearsQuery />
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="lg:w-1/4">
          <div className="filter-group">
            <h3>Crimes</h3>
            <RefinementList
              attribute='crime'
              limit={20}
            />
          </div>
          <div className="filter-group">
            <h3>Related issues</h3>
            <RefinementList
              attribute='issue'
              limit={20}
            />
          </div>
          <div className="filter-group">
            <h3>Categories</h3>
            <RefinementList
              attribute='category'
              limit={20}
            />
          </div>
          <div className="filter-group">
            <h3>Areas served</h3>
            <RefinementList
              attribute='county'
              limit={5}
              showMore
              showMoreLimit={60}
            />
          </div>
          <div className="filter-group">
            <h3>Resource type</h3>
            <RefinementList attribute='type'/>
          </div>
        </div>
        <div className="lg:w-3/4">
          <ScrollTo>
          <div>
            {indices.map(({ name, title, hitComp }) => (
              <Index key={name} indexName={name}>
                <Results>
                  <Hits hitComponent={hitComps[hitComp]()} />
                </Results>
              </Index>
            ))}
          </div>
          </ScrollTo>
        </div>
      </div>
      <div>
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
