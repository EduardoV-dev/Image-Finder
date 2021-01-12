import { useState } from 'react';

const useTerm = initialValue => {
  const [term, setTerm] = useState(initialValue);

  const handleFormOnChange = ({ target }) => setTerm(target.value);

  return [term, handleFormOnChange];
}

export default useTerm;