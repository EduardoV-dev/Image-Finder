import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { loadTerm } from "@redux/images";
import { keywordOnChange } from "@redux/form";
import { useLocation, useNavigate } from "react-router-dom";

const useForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { keyword } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => dispatch(keywordOnChange(value));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loadTerm(keyword));
    pathname !== '/' && navigate('/');
  }

  return {
    keyword,
    handleChange,
    handleSubmit,
  };
}

export default useForm;