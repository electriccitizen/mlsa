import React from 'react';
import Advocate from '../../images/advocate.svg';
import Database from '../../images/database.svg';
import Learn from '../../images/learn.svg';
import Question from '../../images/question.svg';
import Form from '../../images/form.svg';
import Toolbox from '../../images/toolbox.svg';
import Info from '../../images/info.svg';
import CustomHighlight from '../ResourceLibrary/highlight';

const ResultHitContent = (props) => {
  return (
    <>
      <span>
        <span className="visually-hidden">{props.icon === 'database' ? 'web-page' : props.icon}</span>
        {props.icon === 'advocate' ? <Advocate className="resource-icon" />
        : props.icon === 'database' ? <Database className="resource-icon" />
        : props.icon === 'learn' ? <Learn className="resource-icon" />
        : props.icon === 'question' ? <Question className="resource-icon q-icon" />
        : props.icon === 'search' ? <Form className="resource-icon" />
        : props.icon === 'toolbox' ? <Toolbox className="resource-icon" />
        : props.icon === 'info' ? <Info className="resource-icon" />
        : '' }
      </span>
      <h2 className="h3 mb-4 text-blue underline force-left">
        {props.title}
        {props.highlight && 
          <CustomHighlight attribute="title" hit={props.hit} />
        }
      </h2>
    </>
  );
}

export default ResultHitContent;
