import React from 'react';
import { Responses } from "./Responses"
import { Buttons } from "./Buttons"
import { StepperWrapper } from "./Stepper"

const CustomStep = ({ question, responses }) => (
  <div>
    <h3>{question}</h3>
    <Responses component={responses} />
  </div>
);

export function Steps({previousStep, nextStep, activeStepIndex,totalSteps,allQuestions, getStep, resetToStep}) {
  return (
    <>
      <StepperWrapper active={activeStepIndex} total={totalSteps} />
      {
      allQuestions.map(
      (question, index) =>
      getStep().isActive && (
        <CustomStep steps={totalSteps} key={question.node.drupal_id} stepIndex={index} responses={question.node.field_responses} question={question.node.name} />
      )
      )}
      <Buttons nextStep={ nextStep } previousStep={previousStep} activeStepIndex={activeStepIndex} resetToStep={resetToStep} totalSteps={totalSteps} />
    </>
  )
}