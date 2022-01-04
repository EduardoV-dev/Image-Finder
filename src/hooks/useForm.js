import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { loadTerm } from "@redux/images";
import { keywordOnChange, setFirstRender } from "@redux/form";

const useForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const {
    form: { keyword, firstRender },
    images: { term },
  } = useSelector(state => state);
  const { query = '' } = queryString.parse(search);

  const handleChange = ({ target: { value } }) => dispatch(keywordOnChange(value));

  const handleSubmit = e => {
    e.preventDefault();
    if (term === keyword) return;
    dispatch(loadTerm(keyword));
    navigate(`/${keyword === '' ? '' : `?query=${keyword}`}`);
  }

  useEffect(() => {
    if (!firstRender) return;
    dispatch(keywordOnChange(query));
    dispatch(loadTerm(query));
    dispatch(setFirstRender(false));
  }, [firstRender, dispatch, query]);

  return {
    keyword,
    handleChange,
    handleSubmit,
  };
}

export default useForm;