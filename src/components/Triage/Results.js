import React, { useState, useEffect, } from 'react';
import algoliasearch from "algoliasearch/lite";
import ResultHit from './resultHit';

function startOver() {
  localStorage.clear();
  if (typeof window !== `undefined`) {
    window.location.replace("/find-help");
  }
}

export function Results() {

  const [queryResults, setQueryResults] = useState('');

  useEffect(() => {

    const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY)
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
  //
  //   console.log('responses:' + responses)
    const county = typeof window !== `undefined` && window.localStorage.getItem('county')
      county && Object.keys(JSON.parse(county)).map((key) => {
        counties.push('county:"' + key + '"')
        return true
      })
    
    let searchString = responses.join(' OR ')
    let countyString = counties && counties.length ? counties.join(' OR ') : 'county:"Statewide"'
    searchString = searchString + ' AND (' + countyString + ')'
    const index = searchClient.initIndex('Resources');

    index.search({
      query: '',
      filters: searchString
    },
    (err, { hits } = {}) => {
      if (err) throw err;
      setQueryResults(hits)
    }
  );
    localStorage.clear()
  }, []);

  return (
    <div className="md:flex md:flex-row md:flex-wrap md:-mx-2">
      {(Object.keys(queryResults).length !==0) ? [
        Object.values(queryResults).map((hit) => {
          return String(hit.internal) === 'true' ?
            <ResultHit
              title={hit.title}
              alias={hit.alias}
              url={hit.url}
              icon={hit.icon[0]}
              hit={hit}
              org={hit.org}
              description={hit.description}
            />
          : ''
        }),
        Object.values(queryResults).map((hit) => {
          return String(hit.county) !== 'Statewide' && String(hit.internal) !== 'true' ?
            <ResultHit
              title={hit.title}
              alias={hit.alias}
              url={hit.url}
              icon={hit.icon[0]}
              hit={hit}
              org={hit.org}
              description={hit.description}
            />
        : ''
      }),
      Object.values(queryResults).map((hit) => {
        return String(hit.county) === 'Statewide' && String(hit.internal) !== 'true' ?
          <ResultHit
            title={hit.title}
            alias={hit.alias}
            url={hit.url}
            icon={hit.icon[0]}
            hit={hit}
            org={hit.org}
            description={hit.description}
          />
        : ''
      })]
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
  );
}


