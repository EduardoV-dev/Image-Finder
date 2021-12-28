import { useState } from "react";

const useForm = (initialState = '') => {
  const [keyword, setKeyword] = useState(initialState);

  const handleChange = ({ target: { value } }) => setKeyword(value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(keyword);
  }

  return {
    keyword,
    handleChange,
    handleSubmit,
  };
}

export default useForm;