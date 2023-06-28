import React, { useState, useEffect, } from 'react';
import algoliasearch from "algoliasearch/lite";
import ResultHit from './resultHit';
import ResultCounter from './resultCounter';

function startOver() {
  localStorage.clear();
  if (typeof window !== `undefined`) {
    window.location.replace("/find-help");
  }
}

export function Results() {

  const [queryResults, setQueryResults] = useState('');
  const [totalHits, setTotalHits] = useState('');

  useEffect(() => {

    const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_ADMIN_KEY)
    const responses = []
    const counties = []

    const currentResponses = typeof window !== `undefined` && Object.entries(window.localStorage)
    const responseSteps = ['crime','category','related']

    currentResponses.map(([item, results]) => {
        (responseSteps.includes(item)) &&
        Object.entries(JSON.parse(results)).map(([key, value]) => {
          value === true ? responses.push(item + ':"' + key + '"') : console.log(value)
          return true
        })
      return true
    });

    const county = typeof window !== `undefined` && window.localStorage.getItem('county')
      county && Object.keys(JSON.parse(county)).map((key) => {
        counties.push('county:"' + key + '"')
        return true
      })

    let searchRefinements = ''
    let countyRefinements = ''

    if (responses.length) {
      searchRefinements = responses.join(' OR ')
    }

    console.log(counties)

    if (counties.length) {
      countyRefinements = counties.join( ' OR ') + ' OR county:"Statewide"'
    } else {
      countyRefinements = 'county:"Statewide"'
    }

    console.log(searchRefinements)
    let searchString = ''
    if (searchRefinements) {
      searchString = searchRefinements + ' AND (' + countyRefinements + ')'
    } else {
      searchString = countyRefinements
    }

    const index = searchClient.initIndex('Resources');

    index.search({
      query: '',
      hitsPerPage: 100,
      page: 0,
      filters: searchString
    },
    (err, { hits,nbHits } = {}) => {
      if (err) throw err;
      setQueryResults(hits)
      setTotalHits(nbHits)
    }
  );
    localStorage.clear()
  }, []);
  return (
    <div>
      {Object.keys(queryResults).length !==0 ? <ResultCounter classes=" text-center" counter={totalHits} /> : ''}
      <div className="md:flex md:flex-row md:flex-wrap md:-mx-2">
        {(Object.keys(queryResults).length !==0) ? [
          Object.values(queryResults).map((hit) => {
            return String(hit.internal_resource) === 'true' ?
              <ResultHit
                title={hit.title}
                alias={hit.alias}
                url={hit.url}
                icon={hit.icon[0]}
                hit={hit}
                org={hit.org}
                description={hit.description}
                key={hit.objectID}
              />
            :
              <ResultHit
            title={hit.title}
            alias={hit.alias}
            url={hit.url}
            icon={hit.icon[0]}
            hit={hit}
            org={hit.org}
            description={hit.description}
            key={hit.objectID}
            />
        })
        ]
        :
        <div className="text-center w-full">Sorry, we could not find any results that matched your answers. Please try again!</div>
        }
        <div className="w-full py-6 text-center">
          <button
            className="btn"
            onClick={()=>{ startOver(); }}>
            Start over!
          </button>
        </div>

        {/*<h2>Debug:</h2>*/}
        {/*INTRO: {window.localStorage.getItem('intro')}*/}
        {/*<hr />*/}
        {/*CRIME: {window.localStorage.getItem('crime')}*/}
        {/*<hr />*/}
        {/*RELATED: {window.localStorage.getItem('related')}*/}
        {/*<hr />*/}
        {/*CATEGORY: {window.localStorage.getItem('category')}*/}
        {/*<hr />*/}
        {/*COUNTY: {window.localStorage.getItem('county')}*/}
        {/*<hr />*/}

      </div>
    </div>
  );
}


