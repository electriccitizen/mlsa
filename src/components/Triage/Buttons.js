import React from 'react';

export function Buttons({previousStep, nextStep, activeStepIndex,totalSteps,resetToStep}) {

  function startOver() {
    localStorage.clear();
    resetToStep(0)
  }

  return (
        <div className="-mt-2 mb-12 mx-auto max-w-md flex flex-row flex-wrap content-center justify-start">
          { activeStepIndex === 0 || activeStepIndex+1 > totalSteps ? ''
          : (<button
              className="btn text-13 w-38 mr-3 mb-4 inline-block leading-0 sm:w-40"
              disabled={activeStepIndex === 0} onClick={previousStep}>
              PREVIOUS
            </button>
          }
          {activeStepIndex !== totalSteps &&
          <button
            className="btn text-13 w-38 mr-3 mb-4 inline-block leading-0 sm:w-40"
            onClick={nextStep}
          >
            {activeStepIndex === 0 ? 'START' : activeStepIndex + 1 === totalSteps ? 'SUBMIT' : 'NEXT'}
          </button>
          }
          {(activeStepIndex !== 0 && activeStepIndex !== totalSteps) && <button className="w-full mb-4 text-20 text-left font-bold text-blue hover:text-green-dark focus:text-green-dark hover:underline focus:underline sm:w-auto" onClick={startOver}>Start over?</button> }
            </div>
  )
}