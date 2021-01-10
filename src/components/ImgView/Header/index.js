import React from 'react';
import Header from '../../layout/Header';
import { Form } from '../../ui/Container';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

const ImgViewHeader = () => {
  return (
    <Header
      minHeight={'8rem'}
    >
      <Form
        imgView
      >
        <Input
          type="text"
          placeholder="Buscar Imagenes..."
          width={'13.5rem'}
          borderRadius={'10px 0 0 10px'}
          backgroundColor={({ theme }) => theme.primary}
          color={({ theme }) => theme.text}
          padding={'0.8rem'}
          imgViewHeader
        />
        <Button
          type="button"
          backgroundColor={({ theme }) => theme.primaryDarken}
          padding={'0.8rem 1rem'}
          fontWeight={'bold'}
          borderRadius={'0 10px 10px 0'}
          imgViewHeader
        >Buscar</Button>
      </Form>
    </Header>
  );
}

export default ImgViewHeader;