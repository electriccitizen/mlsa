import React from 'react';

export function Buttons({previousStep, nextStep, activeStepIndex,totalSteps,resetToStep}) {

  function startOver() {
    localStorage.clear();
    resetToStep(0)
  }

  function submitResponses() {
    nextStep()
  }

  return (
        <div className="-mt-2 mb-12 mx-auto max-w-md flex flex-row flex-wrap content-center justify-start">
          { activeStepIndex === 0 ? ''
          : (<button
              className="btn text-13 w-40 mr-3 mb-4 inline-block leading-0"
              disabled={activeStepIndex === 0} onClick={previousStep}>
              PREVIOUS
            </button>)
          }
            <button
              className="btn text-13 w-40 mr-3 mb-4 inline-block leading-0"
              onClick={()=>{
              activeStepIndex+1 === totalSteps ? submitResponses() : nextStep();
                }
              }
            >
          { activeStepIndex === 0 ? 'START' : activeStepIndex+1 === totalSteps ?  'SUBMIT' : 'NEXT'}
        </button>

          {activeStepIndex !== 0 && <button className="w-full mb-4 text-20 text-left font-bold text-blue hover:text-green focus:text-green sm:w-auto" onClick={startOver}>Start over?</button> }
            </div>
  )
}