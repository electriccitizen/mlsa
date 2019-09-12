import React from 'react';
import Stepper from 'react-stepper-horizontal';

export function StepperWrapper({active, total}) {
  // TODO: grab the total and generate the steps below
  return (
    <>
      {active < total &&
      <Stepper activeColor="#1155cc" activeTitleColor="#1155cc" completeColor="#1155cc" completeTitleColor="#1155cc"
               defaultColor="#767676" defaultTitleColor="#767676" defaultBarColor="#c5c4c6"
               steps={[{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }, { title: 'Step Four' }, { title: 'Step Five' }]}
               activeStep={active}/>
      }
      </>
      );
}
