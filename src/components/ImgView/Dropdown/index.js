import React from 'react';
import DropdownItem from '../DropdownItem';
import { Normal } from '../../ui/Container';
import { H1 } from '../../ui/Text';
import { UlList } from '../../ui/List';
import { ButtonGroup, Button } from '../../ui/Button';
import useImageSizeSelected from '../../../hooks/custom/useImageSizeSelected';
import { formatResolution, displayImageInNewTab } from '../../../utils/Image';

const Drowndown = ({ imagesSizes }) => {
  const { small, medium, original } = imagesSizes;
  const [selectedImageSize, setSelectedImageSize] = useImageSizeSelected('small');

  return (
    <Normal
      backgroundColor={({ theme }) => theme.secondary}
      borderRadius={'10px'}
      padding={'1rem'}
      margin={'1.5rem auto'}
      position={'absolute'}
      dropDown
    >
      <H1
        fontSize={'1rem'}
      >Tamaño de la Imagen</H1>
      <UlList>
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
      </UlList>
      <ButtonGroup
        dropDown
      >
        <Button
          type="button"
          padding={'0.6rem 1.7rem'}
          borderRadius={'30px'}
          fontWeight={'bold'}
        >Descargar</Button>
        <Button
          type="button"
          onClick={() => displayImageInNewTab({ selectedImageSize, imagesSizes })}
          padding={'0.6rem 1.7rem'}
          borderRadius={'30px'}
          backgroundColor={({ theme }) => theme.primaryDarken}
          color={({ theme }) => theme.text}
        >Abrir</Button>
      </ButtonGroup>
    </Normal>
  );
}

export default Drowndown;