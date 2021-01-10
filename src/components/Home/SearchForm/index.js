import React, { useContext } from 'react';
import Error from '../Error';
import { Form } from '../../ui/Container';
import { FormControl, Input } from '../../ui/Input';
import { Label } from '../../ui/Text';
import { Button } from '../../ui/Button';
import useTerm from '../../../hooks/custom/useTerm';
import { SearchContext } from '../../../hooks/context/SearchContext';

const SearchForm = () => {
  const [input, handleOnChange] = useTerm('');
  const { formError, handleSearchSubmit } = useContext(SearchContext);

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
          onChange={handleOnChange}
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