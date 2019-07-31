import React, { useState } from 'react';
import { Crime } from './Crime'

export function Responses({vocab}) {
  // Declare a new state variablewhich we'll call "count"
  return (
    <div>
      {vocab}
    <Crime />
    </div>
  );
}