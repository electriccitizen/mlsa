import React from 'react';
import { Responses } from "./Responses"
import { Buttons } from "./Buttons"
import { StepperWrapper } from "./Stepper"

const CustomStep = ({ question, responses }) => (
  <div>
    <h3 className="mb-8 font-extrabold text-24">{question}</h3>
    <Responses component={responses} />
  </div>
);

export function Steps({previousStep, nextStep, activeStepIndex,totalSteps,allQuestions, getStep, resetToStep}) {
  return (
    <div className="mx-auto max-w-2xlHalf md:border md:border-grey-mid md:mY-12">
      <div className="hidden md:block mb-12 stepper">
        <StepperWrapper active={activeStepIndex} total={totalSteps} />
      </div>
      <div className="triage-steps mx-auto max-w-md">
        {
        allQuestions.map(
        (question, index) =>
        getStep().isActive && (
          <CustomStep steps={totalSteps} key={question.node.drupal_id} stepIndex={index} responses={question.node.field_responses} question={question.node.name} />
        )
        )}
      </div>
      <Buttons nextStep={ nextStep } previousStep={previousStep} activeStepIndex={activeStepIndex} resetToStep={resetToStep} totalSteps={totalSteps} />
    </div>
  )
}