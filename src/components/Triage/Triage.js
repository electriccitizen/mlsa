import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { useWizard } from "react-wizard-primitive";
import { CustomSteps } from "./CustomSteps"
import { Results } from "./Results"
export function Triage(props) {
  const { nextStep, previousStep, activeStepIndex, getStep, initialStepIndex  } = useWizard();

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
    <div>
      {activeStepIndex+1 > totalSteps ?

        <Results />

        :
        <CustomSteps
          previousStep={previousStep}
          nextStep={nextStep}
          getStep={getStep}
          allQuestions={allQuestions}
          activeStepIndex={activeStepIndex}
          totalSteps={totalSteps} />
      }
      </div>
  );
}