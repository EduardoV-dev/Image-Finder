import React from 'react';
import DropdownItem from '../DropdownItem';
import useImageSizeSelected from '../../../hooks/custom/useImageSizeSelected';
import { formatResolution, displayImageInNewTab } from '../../../utils/Image';
import { DropBox, Title, DropItems, ButtonGroup, Button } from './styled';

const Drowndown = ({ imagesSizes }) => {
  const { small, medium, original } = imagesSizes;
  const [selectedImageSize, setSelectedImageSize] = useImageSizeSelected('small');

  return (
    <DropBox>
      <Title>Tamaño de la Imagen</Title>
      <DropItems>
        <DropdownItem
          text='Pequeño'
          resolution={formatResolution(small.width, small.height)}
          value='small'
          checked={selectedImageSize === 'small'}
          onChange={setSelectedImageSize}
        />
        <DropdownItem
          text='Mediano'
          resolution={formatResolution(medium.width, medium.height)}
          value='medium'
          checked={selectedImageSize === 'medium'}
          onChange={setSelectedImageSize}
        />
        <DropdownItem
          text='Original'
          resolution={formatResolution(original.width, original.height)}
          value='original'
          checked={selectedImageSize === 'original'}
          onChange={setSelectedImageSize}
        />
      </DropItems>
      <ButtonGroup>
        <Button
          type="button"
        >Descargar</Button>
        <Button
          type="button"
          open
          onClick={() => displayImageInNewTab({ selectedImageSize, imagesSizes })}
        >Abrir</Button>
      </ButtonGroup>
    </DropBox>
  );
}

export default Drowndown;