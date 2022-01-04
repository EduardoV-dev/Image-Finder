import { useTranslation } from "react-i18next";

const SearchForm = ({
  keyword,
  handleChange,
  handleSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column flex-sm-row align-items-sm-center"
    >
      <div className="flex-grow-1">
        <input
          type="text"
          placeholder={t('home_search_input_placeholder')}
          className="form-control"
          onChange={handleChange}
          value={keyword}
        />
      </div>
      <button
        type="submit"
        className="btn btn-dark fw-bold ms-sm-2 mt-2 mt-sm-0"
      >
        {t('home_search_button')}
      </button>
    </form>
  );
}

export default SearchForm;