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
        <div className="button-wrapper">
          { activeStepIndex === 0 ? ''
          : (<button
              className="btn text-13 mr-3 mb-2 inline-block"
              disabled={activeStepIndex === 0} onClick={previousStep}>
              PREVIOUS
            </button>)
          }
            <button
              className="btn text-13 mr-3 mb-2 inline-block"
              onClick={()=>{
              activeStepIndex+1 === totalSteps ? submitResponses() : nextStep();
                }
              }
            >
          { activeStepIndex === 0 ? 'START' : activeStepIndex+1 === totalSteps ? 'SUBMIT' : 'NEXT'}
        </button>

          {activeStepIndex !== 0 && <button onClick={startOver}>Start over?</button> }
            </div>
  )
}