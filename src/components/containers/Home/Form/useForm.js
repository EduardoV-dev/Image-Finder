import { useState } from "react";
import { useDispatch } from "react-redux";

import { loadTerm } from "../../../../redux/images";

const useForm = (initialState = '') => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState(initialState);

  const handleChange = ({ target: { value } }) => setKeyword(value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loadTerm(keyword));
  }

  return {
    keyword,
    handleChange,
    handleSubmit,
  };
}

export default useForm;