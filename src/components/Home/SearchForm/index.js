import React, { useContext } from 'react';
import Error from '../Error';
import useTerm from '../../../hooks/custom/useTerm';
import { SearchContext } from '../../../hooks/context/SearchContext';
import { Form, FormControl, Label, Input, Button } from './FormStyled';

const SearchForm = () => {
  const [input, handleOnChange] = useTerm('');
  const { formError, handleSearchSubmit } = useContext(SearchContext);

  const errorComponent = formError ? <Error>El término es obligatorio</Error> : null

  return (
    <Form
      onSubmit={e => handleSearchSubmit(e, input)}
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
      {errorComponent}
    </Form>
  );
}

export default SearchForm;