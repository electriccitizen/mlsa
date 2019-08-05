import React, { useState } from 'react';
import { Crime } from './Crime'
import { Intro } from './Intro'
import { County } from './County'
import { Category } from './Category'
import { Related } from './Related'
const components = {
  intro: Intro,
  crime: Crime,
  county: County,
  category: Category,
  related: Related
};
export function Responses({component}) {
  const StepComponent = components[component];
  return (
    <div>
     <StepComponent />
    </div>
  );
}