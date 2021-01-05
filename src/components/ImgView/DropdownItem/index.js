import React from 'react';
import { Li, Radio, Label } from './DropdownItemStyled';

const DropdownItem = ({ text, resolution }) => {
  return (
    <Li>
      <Label>
        <Radio
          type="radio"
          name="res"
        />
        {text}
      </Label>
      <span>{resolution}</span>
    </Li>
  );
}

export default DropdownItem;