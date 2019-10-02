import React, { useState, useEffect, } from 'react';
import algoliasearch from "algoliasearch/lite";
import { Link } from 'gatsby';
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
    let countyString = counties.join(' OR ')

    searchString = searchString + ' AND ((' + countyString + ') OR county:Statewide)'
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
      {(Object.keys(queryResults).length !==0) ? Object.values(queryResults).map((hit) =>
        <div key={hit.title} className="text-center mb-8 pb-8 border-b border-grey-midAlt md:text-left md:border-b-0 md:pb-0 md:px-2 md:w-1/3">
          {hit.county}
          {String(hit.alias).includes('http') ?  
          <a className="resource-link" href={hit.url} target="_blank" rel="noopener noreferrer">
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
            <h2 className="h3 mb-4 text-blue underline force-left">
              {hit.title}
            </h2>
          </a>
        : String(hit.alias) === '/user' ?
          <Link className="resource-link" to={hit.alias}>
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
            <h2 className="h3 mb-4 text-blue underline force-left">
              {hit.title}
            </h2>
          </Link>
        : 
          <Link className="resource-link" to={hit.alias}>
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
            <h2 className="h3 mb-4 text-blue underline force-left">
              {hit.title}
            </h2>
          </Link>
        }
        <div attribute="org" hit={hit} className="text-16 italic mb-3 text-grey-dark">{hit.org}</div>
        <div attribute="description" hit={hit}  dangerouslySetInnerHTML={{ __html: hit.description}} />
      </div>
      )
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


