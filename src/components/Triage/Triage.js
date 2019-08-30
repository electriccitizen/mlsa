import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { useWizard } from "react-wizard-primitive";
import { Steps } from "./Steps"
import { Results } from "./Results"

export function Triage() {

  const { nextStep, previousStep, activeStepIndex, getStep,resetToStep } = useWizard();

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

  const totalSteps = data.allTaxonomyTermTriageQuestions.edges.length
  const allQuestions = data.allTaxonomyTermTriageQuestions.edges

  return (
    <>
      {activeStepIndex+1 > totalSteps ?
        <Results />
        :
        <Steps
          previousStep={previousStep}
          nextStep={nextStep}
          getStep={getStep}
          allQuestions={allQuestions}
          activeStepIndex={activeStepIndex}
          totalSteps={totalSteps}
          resetToStep={resetToStep}
        />
      }
    </>
  );
}