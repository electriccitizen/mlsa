import React, { useState } from 'react';
import qs from 'qs';
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
import ResultCounter from '../Triage/resultCounter';
import { Location, navigate } from "@reach/router"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : <div className="mb-4 md:px-2 lg:px-4">No results for '{state.query}'</div>
)

const Count = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
   res && res.nbHits > 0 ? <ResultCounter counter={res && res.nbHits} classes=" md:ml-8" /> : ''
)

const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const searchStateToUrl = ( searchState ) =>
  searchState ? `${createURL(searchState)}` : '';

const createURL = state => `?${qs.stringify(state)}`;

const ResourceLibrary = ({ location, indices }) => {

  const DEBOUNCE_TIME = 700
  const [searchState, setSearchState] = useState(urlToSearchState(location));
  const [debouncedSetState, setDebouncedSetState] = useState(null);

  const onSearchStateChange = updatedSearchState => {
    clearTimeout(debouncedSetState);
    setDebouncedSetState(
      setTimeout(() => {
        navigate(searchStateToUrl(updatedSearchState), updatedSearchState);
      }, DEBOUNCE_TIME)
    );
    setSearchState(updatedSearchState);
  };

  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >

        <ScrollTo>
          <Input />

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
              <div className="results-list md:pl-4">
                {indices.map(({ name, hitComp }) => (
                  <Index key={name} indexName={name}>
                    <Results>
                      <Hits  hitComponent={hitComps[hitComp]()}  />
                    </Results>
                  </Index>
                ))}
              </div>
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

        </ScrollTo>
      </InstantSearch>
    </>
  )
}

export default wrapper => (
  <Location>
    {locationProps => <ResourceLibrary {...locationProps} {...wrapper} />}
  </Location>
);
