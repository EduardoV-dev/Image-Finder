import { useState } from 'react';

const useImageSizeSelected = initialState => {
  const [selected, setSelected] = useState(initialState);

  const handleOnChange = ({ target }) => setSelected(target.value);

  return [selected, handleOnChange];
}

export default useImageSizeSelected;