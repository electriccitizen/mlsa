import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { useWizard } from "react-wizard-primitive";
import { Responses } from "./Responses"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../hooks/use-local-storage';

export function Triage(props) {
  const { nextStep, previousStep, activeStepIndex, getStep } = useWizard();
  const colors = ["#34495e", "#9b59b6", "#e74c3c", "#2ecc71", "#1abc9c"];
  const [crime, setCrime] = useState("");
  const data = useStaticQuery(graphql`
    query QuestionQuery {
      allTaxonomyTermTriageQuestions {
        edges {
          node {
            drupal_id
            name
            field_responses
          }
        }
      }
    }
  `)

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // const wizard = useWizard();
  // const step1 = wizard.getStep();
  // const step2 = wizard.getStep();
  // const step3 = wizard.getStep();

  // Just a basic component for the sake of layout
  const CustomStep = ({ stepIndex, color, question, vocab }) => (
    <div className="step" style={{ background: color }}>
      <h3>{question}</h3>
      <Responses props={props} component={vocab} />
    </div>
  );

  return (
    <div>
      {
      data.allTaxonomyTermTriageQuestions.edges.map(
      (question, index) =>
      getStep().isActive && (
        <CustomStep key={question.node.drupal_id} stepIndex={index} vocab={question.node.field_responses} question={question.node.name} />
      )
      )}
      <div className="button-wrapper">
        {/* disable Previous button if activeStepIndex is 0 */}

    { activeStepIndex === 0 ? ''
      : (<button
        className="btn text-13 mr-3 mb-2 inline-block"
        disabled={activeStepIndex === 0} onClick={previousStep}>
          Previous
        </button>)
    }

        {/* disable Previous button if activeStepIndex is lastStep */}
        <button
          className="btn text-13 mr-3 mb-2 inline-block"
          disabled={activeStepIndex === colors.length - 1}
          onClick={()=>{
            nextStep();
          }}
        >
        { activeStepIndex === 0 ? 'START' : 'NEXT' }        </button>
      </div>

    </div>
  );
}