import React from 'react';
import { Responses } from "./Responses"
import { Buttons } from "./Buttons"

const CustomStep = ({ question, responses, steps }) => (
  <div className="step" >
    <h3>{question}</h3>
    <Responses component={responses} />
  </div>
);

export function CustomSteps({previousStep, nextStep, activeStepIndex,totalSteps,allQuestions, getStep}) {
  return (
    <>
    STEP {activeStepIndex+1} of {totalSteps}
      {
      allQuestions.map(
      (question, index) =>
      getStep().isActive && (
        <CustomStep steps={totalSteps} key={question.node.drupal_id} stepIndex={index} responses={question.node.field_responses} question={question.node.name} />
      )
      )}

      <Buttons nextStep={ nextStep } previousStep={previousStep} activeStepIndex={activeStepIndex} totalSteps={totalSteps} />
      </>
  )
}