import React from 'react';
import Stepper from 'react-stepper-horizontal';

export function StepperWrapper({active, total}) {
  // TODO: grab the total and generate the steps below
  return (
    <>
      <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}, {title: 'Step Five'}] } activeStep={ active } />
    </>
      );
}
