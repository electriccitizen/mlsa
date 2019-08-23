import React from 'react';

export function Results() {
  return (
    <div>
      <h2>Help is on the way:</h2>
     INTRO: {window.localStorage.getItem('intro')}
      <hr />
      CRIME: {window.localStorage.getItem('crime')}
      <hr />
      RELATED: {window.localStorage.getItem('category')}
      <hr />
      CATEGORY: {window.localStorage.getItem('related')}
      <hr />
      COUNTY: {window.localStorage.getItem('county')}
      <hr />

    </div>
  );
}
