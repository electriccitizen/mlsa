import React, { useState, useEffect, createRef } from "react"
import qs from 'qs';
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

export default function ResourceLibrary({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  useClickOutside(ref, () => setFocus(false))

  var foo = [
    {
      "uri": "https://dojmt.gov/victims/forms/",
      "crime": [],
      "issue": [
        {
          "name": "Property Issues"
        }
      ],
      "category": null,
      "county": [
        {
          "name": "Big Horn "
        },
        {
          "name": "Carbon "
        },
        {
          "name": "Carter "
        }
      ],
      "type": [
        {
          "name": "Find legal information"
        }
      ],
      "drupal_id": "7cfe986f-9b5b-4467-9498-b89346581737",
      "changed": "2019-07-23T20:54:05+00:00",
      "status": true,
      "title": "Forms for Crime Victims",
      "description": {
        "value": "<p>Various forms victims mayneed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices ullamcorper velit in congue. Donec at metus sit amet nisl elementum suscipit. Nam commodo suscipit enim non finibus.</p>\r\n"
      },
      "objectID": "16661052"
    }
  ]


  var county_array = [];
  for( var i = 0; i < foo.length; i++ )
  {
    county_array.push( foo[i].name );
  }//for

  var str = county_array.join(",");
  console.log(str);

  return (
    <>

      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
        routing="true"
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
            <h4 class="mb-0 mt-0">Crimes</h4>
            <RefinementList attribute='crime' />
            <h4 class="mb-0 mt-2">Related issues</h4>
            <RefinementList attribute='issue.name' />
            <h4 class="mb-0 mt-2">Categories</h4>
            <RefinementList attribute='category.name' />
            <h4 class="mb-0 mt-2">Areas served</h4>
            <RefinementList attribute='county.name' />
            <h4 class="mb-0 mt-2">Resource type</h4>
            <RefinementList attribute='type.name'
                            showMoreLimit={2}/>
          </div>
          <div class="w-2/3 bg-gray-500">
            <HitsWrapper  asGrid={hitsAsGrid}>
              {indices.map(({ name, title, hitComp }) => (
                <Index key={name} indexName={name}>
                  <header>
                    <h3 class="mb-0">{title}</h3>
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
