import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../../ui/Container';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { SearchContext } from '../../../hooks/context/SearchContext';

const Navbar = () => {
  const { input, handleSearchSubmit, handleInputOnChange } = useContext(SearchContext);
  const history = useHistory();

  const searchImage = e => {
    handleSearchSubmit(e, input);
    history.push('/');
  }

  return (
    <Form
      onSubmit={searchImage}
      imgView
    >
      <Input
        type="text"
        placeholder="Buscar Imagenes..."
        onChange={handleInputOnChange}
        value={input}
        width={'13.5rem'}
        borderRadius={'10px 0 0 10px'}
        backgroundColor={({ theme }) => theme.primary}
        fontColor={({ theme }) => theme.text}
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
  );
}

export default Navbar;