import React from "react";
import { Highlight } from "react-instantsearch-dom";
import Advocate from '../../images/advocate.svg';
import Database from '../../images/database.svg';
import Learn from '../../images/learn.svg';
import Question from '../../images/question.svg';
import Search from '../../images/search.svg';
import Toolbox from '../../images/toolbox.svg';
import Info from '../../images/info.svg';

export const ResourceHit = clickHandler => ({ hit }) => (
  <div>
  	<div>
  		<span className="visually-hidden">{hit.icon[0]}</span>
      {hit.icon[0] === 'advocate' ? <Advocate className="w-16 w-18 m-auto" />
      : hit.icon[0] === 'database' ? <Database className="w-16 w-18 m-auto" />
      : hit.icon[0] === 'learn' ? <Learn className="w-16 w-18 m-auto" />
      : hit.icon[0] === 'question' ? <Question className="w-16 w-18 m-auto" />
      : hit.icon[0] === 'search' ? <Search className="w-16 w-18 m-auto" />
      : hit.icon[0] === 'toolbox' ? <Toolbox className="w-16 w-18 m-auto" />
      : hit.icon[0] === 'info' ? <Info className="w-16 w-18 m-auto" />
      : '' }
  	</div>
  	<h2 className="h3 mb-0 mt-2">
	    <a href={hit.url} onClick={clickHandler}>
	       <Highlight attribute="title" hit={hit} tagName="mark" />
	    </a>
    </h2>
    <div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} />
  </div>
)
