import React from 'react';
import {Form, FormControl, Label, Input, Button} from './FormStyled';

const SearchForm = () => {
  return (  
    <Form>
      <FormControl>
        <Label>Busca una Imagen</Label>
        <Input
          type="text"
          placeholder="Ejemplo: Espacio, Comida..."
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