import React, { useState } from 'react';
import { Crime } from './Steps/Crime'
import { Intro } from './Steps/Intro'
import { County } from './Steps/County'
import { Category } from './Steps/Category'
import { Related } from './Steps/Related'
const components = {
  intro: Intro,
  crime: Crime,
  county: County,
  category: Category,
  related: Related
};

export function Responses({component, props}) {
  const StepComponent = components[component];
  return (
    <div>
      Component name: {component}
     <StepComponent props={props} />
    </div>
  );
}
