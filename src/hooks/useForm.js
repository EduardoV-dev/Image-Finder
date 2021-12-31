import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { loadTerm } from "@redux/images";
import { keywordOnChange } from "@redux/form";

const useForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    form: { keyword },
    images: { term },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => dispatch(keywordOnChange(value));

  const handleSubmit = e => {
    e.preventDefault();
    if (term === keyword) return;
    dispatch(loadTerm(keyword));
  }

  useEffect(() =>
    !pathname.includes('/image') &&
    navigate(`${pathname}?query=${term === '' ? 'all' : term}`)
    , [navigate, pathname, term]);

  return {
    keyword,
    handleChange,
    handleSubmit,
  };
}

export default useForm;