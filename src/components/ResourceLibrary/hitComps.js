import React from "react";
import CustomHighlight from './highlight';
import Advocate from '../../images/advocate.svg';
import Database from '../../images/database.svg';
import Learn from '../../images/learn.svg';
import Question from '../../images/question.svg';
import Form from '../../images/form.svg';
import Toolbox from '../../images/toolbox.svg';
import Info from '../../images/info.svg';


export const ResourceHit = clickHandler => ({ hit }) => (
  <div className="text-center mb-8 md:text-left">
    <a className="resource-link" href={hit.url} onClick={clickHandler}>
    	{/*<span>*/}
    	{/*	<span className="visually-hidden">{hit.icon[0]}</span>*/}
      {/*  {hit.icon[0] === 'advocate' ? <Advocate className="resource-icon" />*/}
      {/*  : hit.icon[0] === 'database' ? <Database className="resource-icon" />*/}
      {/*  : hit.icon[0] === 'learn' ? <Learn className="resource-icon" />*/}
      {/*  : hit.icon[0] === 'question' ? <Question className="resource-icon q-icon" />*/}
      {/*  : hit.icon[0] === 'search' ? <Form className="resource-icon" />*/}
      {/*  : hit.icon[0] === 'toolbox' ? <Toolbox className="resource-icon" />*/}
      {/*  : hit.icon[0] === 'info' ? <Info className="resource-icon" />*/}
      {/*  : '' }*/}
    	{/*</span>*/}
    	<h2 className="h3 mb-4 text-blue underline">
  	    <CustomHighlight attribute="title" hit={hit} />
      </h2>
    </a>
    <div attribute="description" hit={hit} tagName="mark" dangerouslySetInnerHTML={{ __html: hit.description}} />
  </div>
)
