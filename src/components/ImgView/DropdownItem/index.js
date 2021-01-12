import React from 'react';
import { LiElement } from '../../ui/List';
import { Input } from '../../ui/Input';
import { Label, Span } from '../../ui/Text';

const DropdownItem = ({ text, resolution, value, checked, onChange }) => {
  return (
    <LiElement>
      <Label
        fontWeight={'regular'}
        width={'auto'}
        marginBottom={'0'}
      >
        <Input
          type="radio"
          name="res"
          value={value}
          checked={checked}
          onChange={onChange}
          width={'auto'}
          radio
        />
        {text}
      </Label>
      <Span
        fontColor={({ theme }) => theme.text}
      >{resolution}</Span>
    </LiElement>
  );
}

export default DropdownItem;