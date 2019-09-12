import React from 'react';
import { Responses } from "./Responses"
import { Buttons } from "./Buttons"
import { StepperWrapper } from "./Stepper"
import { Results } from "./Results"

const CustomStep = ({ previousStep, nextStep, question, responses,resetToStep,activeStepIndex,totalSteps }) => (
  <div className="mx-auto max-w-2xlHalf md:border md:border-grey-mid md:mY-12">
      <div className="hidden md:block mb-12 stepper">
        <StepperWrapper active={activeStepIndex} total={totalSteps} />
      </div>
      <div className="triage-steps mx-auto max-w-md">
      <h3 className="mb-8 font-extrabold text-24">{question}</h3>
        <Responses component={responses}/>
        <Buttons nextStep={ nextStep } previousStep={previousStep} activeStepIndex={activeStepIndex} resetToStep={resetToStep} totalSteps={totalSteps} />
      </div>
  </div>
);

const ResultsWrapper = () => (
    <Results />
);

export function Steps({allQuestions, getStep,activeStepIndex,totalSteps,previousStep, nextStep,resetToStep}) {
  return (
    <>
       {
           allQuestions.map(
             (question, index) =>
               getStep({ routeTitle: 'step-' + (index + 1) }).isActive && (
                 <CustomStep nextStep={nextStep} previousStep={previousStep} resetToStep={resetToStep}
                             activeStepIndex={activeStepIndex} totalSteps={totalSteps} key={question.node.drupal_id}
                             stepIndex={index} responses={question.node.field_responses} question={question.node.name}/>
               )
           )
       }

      {
          getStep({ routeTitle: 'results' }).isActive && (
            <ResultsWrapper/>
          )
      }
    </>
  )
}