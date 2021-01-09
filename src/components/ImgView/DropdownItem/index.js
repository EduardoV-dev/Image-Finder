import React from 'react';
import { Li, Radio, Label } from './DropdownItemStyled';

const DropdownItem = ({ text, resolution, value, checked, onChange}) => {
  return (
    <Li>
      <Label>
        <Radio
          type="radio"
          name="res"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {text}
      </Label>
      <span>{resolution}</span>
    </Li>
  );
}

export default DropdownItem;