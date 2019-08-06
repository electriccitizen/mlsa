import React from "react";
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
  ScrollTo,
} from "react-instantsearch-dom"

import { ClearRefinements } from 'react-instantsearch-dom';
import { CurrentRefinements } from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch/lite";
import { Pagination } from 'react-instantsearch-dom';
import Input from "./input";
import * as hitComps from "./hitComps";
import FilterToggle from './filterToggle';

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : <div className="mb-4 md:px-2 lg:px-4">No results for '{state.query}'</div>
)

export default function ResourceLibrary({ indices, collapse, hitsAsGrid }) {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
      >
      <div>
        <Input />
      </div>
      <div className="clearfix">
        <div className="current-refinements">
          <CurrentRefinements />
          <div className="clear-filters">
            <ClearRefinements />
          </div>
        </div>
      </div>

      <div className={`md:flex md:flex-row mb-6`}>
        <FilterToggle />
        <div className="md:w-2/3 lg:w-3/4">
          <ScrollTo>
            <div className="results-list md:pl-4">
              {indices.map(({ name, title, hitComp }) => (
                <Index key={name} indexName={name}>
                  <Results>
                    <Hits hitComponent={hitComps[hitComp]()} />
                  </Results>
                </Index>
              ))}
            </div>
          </ScrollTo>
          <div id="pagination" className="border-t border-mid-grey pt-4 px-4 md:mx-4 lg:mx-8">
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
      </div>
      </InstantSearch>
    </>
  )
}
