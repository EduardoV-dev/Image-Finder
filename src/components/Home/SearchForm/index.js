import React, { useContext } from 'react';
import useTerm from '../../../hooks/custom/useTerm';
import { SearchContext } from '../../../hooks/context/SearchContext';
import { Form, FormControl, Label, Input, Button } from './FormStyled';

const SearchForm = () => {
  const [term, handleOnChange] = useTerm('');
  const { handleSearchSubmit } = useContext(SearchContext);

  return (
    <Form
      onSubmit={e => handleSearchSubmit(e, term)}
    >
      <FormControl>
        <Label>Busca una Imagen</Label>
        <Input
          type="text"
          placeholder="Ejemplo: Espacio, Comida..."
          onChange={handleOnChange}
        />
      </FormControl>
      <FormControl>
        <Button
          type="submit"
        >Buscar Imagen</Button>
      </FormControl>
    </Form>
  );
}

export default SearchForm;