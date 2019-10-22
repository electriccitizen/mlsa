import React from 'react';

const Radio = ({ type = "radio", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export default Radio;
