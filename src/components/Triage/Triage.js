import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { useWizard } from "react-wizard-primitive";
import { Responses } from "./Responses"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../hooks/use-local-storage';
import { CustomSteps } from "./CustomSteps"
import { Results } from "./Results"

export function Triage(props) {
  const { nextStep, previousStep, activeStepIndex, getStep, initialStepIndex  } = useWizard();

  //const [crime, setCrime] = useState("");
  //const [currentStep,setCurrentStep] = useLocalStorage('current-step',2)

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
  //const [count, setCount] = useState(0);

  // const wizard = useWizard();
  // const step1 = wizard.getStep();
  // const step2 = wizard.getStep();
  // const step3 = wizard.getStep();

  const totalSteps = data.allTaxonomyTermTriageQuestions.edges.length
  const allQuestions = data.allTaxonomyTermTriageQuestions.edges



  return (
    <div>
      {activeStepIndex+1 > totalSteps ?
        <Results />
        :
        <CustomSteps previousStep={previousStep} nextStep={nextStep} getStep={getStep} allQuestions={allQuestions} activeStepIndex={activeStepIndex}
                     totalSteps={totalSteps} />

      }
      </div>
  );
}