import React, { useState } from 'react';
import algoliasearch from "algoliasearch/lite";
import ShowResults from './ShowResults'
function loggoHits(hits) {
  Object.values(hits).map((hit) =>
          console.log(hit.title)
        )
  }

const resultList = ['hits','bits','fits'];


class Foo extends React.Component {

  constructor(props) {
    super(props);
      this.state = { results: ['foo','bar']}
      const searchClient = algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY
      )
    let foobar = []
    const index = searchClient.initIndex('Resources');

     index.search({
         query: '',
         facetFilters: [
           ['crime:Assault'], // (single string)
         ]
       },
       (err, { hits } = {}) => {

         this.state = { test:['foo','boo']}
         if (err) throw err;
         this.setState ({
           results: hits
         })

         // Object.values(hits).map((hit) =>
         //   console.log(hit.title)
         // )
       }
     );

  }

  logHits(hits) {
   console.log(hits)
    return hits

  }


  render() {
    return (
     <>
       <h6>test</h6>
       <ShowResults hits={this.state.results} />
       {Object.values(this.state.results).map((foo) =>
         <div>{foo.title}</div>
         )
       }

       <h1>Hello, world.</h1>
     </>
    );
  }
}

export default Foo
