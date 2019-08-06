import React from "react";
import { Highlight } from "react-instantsearch-dom";
import Advocate from '../../images/advocate.svg';
import Database from '../../images/database.svg';
import Learn from '../../images/learn.svg';
import Question from '../../images/question.svg';
import Form from '../../images/form.svg';
import Toolbox from '../../images/toolbox.svg';
import Info from '../../images/info.svg';

export const ResourceHit = clickHandler => ({ hit }) => (
  <div className="text-center mb-8 md:text-left">
  	<div>
  		<span className="visually-hidden">{hit.icon[0]}</span>
      {hit.icon[0] === 'advocate' ? <Advocate className="resource-icon" />
      : hit.icon[0] === 'database' ? <Database className="resource-icon" />
      : hit.icon[0] === 'learn' ? <Learn className="resource-icon" />
      : hit.icon[0] === 'question' ? <Question className="resource-icon" />
      : hit.icon[0] === 'search' ? <Form className="resource-icon" />
      : hit.icon[0] === 'toolbox' ? <Toolbox className="resource-icon" />
      : hit.icon[0] === 'info' ? <Info className="resource-icon" />
      : '' }
  	</div>
  	<h2 className="h3 mb-4">
	    <a href={hit.url} onClick={clickHandler}>
	       <Highlight attribute="title" hit={hit} tagName="mark" />
	    </a>
    </h2>
    <div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} />
  </div>
)
