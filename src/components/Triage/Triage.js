import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { useWizard } from "react-wizard-primitive";
import { Responses } from "./Responses"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../hooks/use-local-storage';

export function Triage(props) {
  const { nextStep, previousStep, activeStepIndex, getStep, initialStepIndex  } = useWizard();

  const [crime, setCrime] = useState("");

  const [currentStep,setCurrentStep] = useLocalStorage('current-step',2)

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

  const CustomStep = ({ stepIndex, question, responses, steps }) => (
    <div className="step" >
      <h3>{question}</h3>
      <Responses props={props} component={responses} />
    </div>
  );

  return (
    <div>
      STEP {activeStepIndex+1} of {data.allTaxonomyTermTriageQuestions.edges.length}
      {
      data.allTaxonomyTermTriageQuestions.edges.map(
      (question, index) =>
      getStep().isActive && (
        <CustomStep  steps={data.allTaxonomyTermTriageQuestions.edges.length} key={question.node.drupal_id} stepIndex={index} responses={question.node.field_responses} question={question.node.name} />
      )
      )}
      <div className="button-wrapper">
          {/* disable Previous button if activeStepIndex is 0 */}
          { activeStepIndex === 0 ? ''
          : (<button
              className="btn text-13 mr-3 mb-2 inline-block"
              disabled={activeStepIndex === 0} onClick={previousStep}>
              PREVIOUS
            </button>)
          }

          {/* disable Previous button if activeStepIndex is lastStep */}
            <button
              className="btn text-13 mr-3 mb-2 inline-block"
              onClick={()=>{
              nextStep();
                }
              }
            >
          {/* Set the button text */}
          { activeStepIndex === 0 ? 'START' : activeStepIndex === 4 ? 'SUBMIT' : 'NEXT'}
        </button>
      </div>
    </div>
  );
}