import React, { useContext } from 'react';
import Error from '../Error';
import { Form } from '../../ui/Container';
import { FormControl, Input } from '../../ui/Input';
import { Label } from '../../ui/Text';
import { Button } from '../../ui/Button';
import { SearchContext } from '../../../hooks/context/SearchContext';

const SearchForm = () => {
  const {
    input,
    formError,
    handleSearchSubmit,
    handleInputOnChange
  } = useContext(SearchContext);
  const errorComponent = formError ? <Error>El término es obligatorio</Error> : null;

  return (
    <Form
      onSubmit={e => handleSearchSubmit(e, input)}
    >
      <FormControl>
        <Label>Busca una Imagen</Label>
        <Input
          type="text"
          placeholder="Ejemplo: Espacio, Comida..."
          onChange={handleInputOnChange}
          value={input}
        />
      </FormControl>
      <FormControl>
        <Button
          type="submit"
          fontWeight={'bold'}
          block
          padding={'0.8rem'}
        >Buscar Imagen</Button>
      </FormControl>
      {errorComponent}
    </Form>
  );
}

export default SearchForm;