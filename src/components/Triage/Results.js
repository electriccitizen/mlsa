import React, { useState, useEffect } from 'react';
import algoliasearch from "algoliasearch/lite";

import Advocate from '../../images/advocate.svg';
import Database from '../../images/database.svg';
import Learn from '../../images/learn.svg';
import Question from '../../images/question.svg';
import Form from '../../images/form.svg';
import Toolbox from '../../images/toolbox.svg';
import Info from '../../images/info.svg';

function startOver() {
  localStorage.clear();
  if (typeof window !== `undefined`) {
    window.location.replace("/triage");
  }
}

export function Results() {

  const [queryResults, setQueryResults] = useState('');

  useEffect(() => {

    const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
    const responses = []
    const counties = []

    console.log('init')

    const currentResponses = typeof window !== `undefined` && Object.entries(window.localStorage)
    currentResponses.map(([item, results]) => {
      (item !== 'algoliasearch-client-js' && item !== 'intro' && item !== 'county') &&
        Object.entries(JSON.parse(results)).map(([key, value]) => {
          value === true ? responses.push(item + ':"' + key + '"') : console.log(value)
          console.log('hit map')
          return true
        })
        console.log('response map')
      return true
    });

    const county = window.localStorage.getItem('county')
      county && Object.keys(JSON.parse(county)).map((key) => {
        counties.push('county:"' + key + '"')
        console.log('county query')
        return true
      })

    let searchString = responses.join(' OR ')
    let countyString = counties.join(' OR ')

    searchString = searchString + ' AND ((' + countyString + ') OR county:Statewide)'

    const index = searchClient.initIndex('Resources');

    index.search({
      query: '',
      filters: searchString
    },
    (err, { hits } = {}) => {
      if (err) throw err;
      console.log('set query')
      setQueryResults(hits)
    }
  );
  }, []);

  return (
    <div className="md:flex md:flex-row md:flex-wrap md:-mx-2">
      {queryResults ? Object.values(queryResults).map((hit) =>
        <div key={hit.title} className="text-center mb-8 pb-8 border-b border-grey-midAlt md:text-left md:border-b-0 md:pb-0 md:px-2 md:w-1/3">
          <a className="resource-link" href={hit.url} >
          <span>
    		    <span className="visually-hidden">{hit.icon[0]}</span>
            {hit.icon[0] === 'advocate' ? <Advocate className="resource-icon" />
            : hit.icon[0] === 'database' ? <Database className="resource-icon" />
            : hit.icon[0] === 'learn' ? <Learn className="resource-icon" />
            : hit.icon[0] === 'question' ? <Question className="resource-icon q-icon" />
            : hit.icon[0] === 'search' ? <Form className="resource-icon" />
            : hit.icon[0] === 'toolbox' ? <Toolbox className="resource-icon" />
            : hit.icon[0] === 'info' ? <Info className="resource-icon" />
            : '' }
    	    </span>
    	    <h2 className="h3 mb-4 text-blue underline">
            {hit.title}
          </h2>
        </a>
        <div attribute="description" hit={hit}  dangerouslySetInnerHTML={{ __html: hit.description}} />
      </div>
      )
      :
      <div>Sorry, we could not find any results that matched your answers. Please try again!</div>
      }
      <div className="w-full py-6 md:px-2">
        <button
          className="btn text-13 mr-3 mb-2 inline-block"
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
