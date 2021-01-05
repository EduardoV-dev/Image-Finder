import React from 'react';
import DropdownItem from '../DropdownItem';
import { DropBox, Title, DropItems, ButtonGroup, Button } from './DropdownStyled';

const Drowndown = () => {
  return (
    <DropBox>
      <Title>Tamaño de la Imagen</Title>
      <DropItems>
        <DropdownItem
          text='Pequeño'
          resolution='150x99'
        />
        <DropdownItem
          text='Mediano'
          resolution='640x426'
        />
        <DropdownItem
          text='Original'
          resolution='6000x4000'
        />
      </DropItems>
      <ButtonGroup>
        <Button
          type="button"
        >Descargar</Button>
        <Button
          type="button"
          open
        >Abrir</Button>
      </ButtonGroup>
    </DropBox>
  );
}

export default Drowndown;