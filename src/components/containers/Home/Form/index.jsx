import { useTranslation } from "react-i18next";

import { Card } from '@components/commons';
import styles from './form.module.scss';

const Form = ({
  keyword,
  handleChange,
  handleSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <form
      className={`position-relative w-100 ${styles.form}`}
      onSubmit={handleSubmit}
    >
      <Card
        className={`d-md-flex flex-md-row py-5 px-3 mx-auto p-md-5 ${styles.formCard}`}
      >
        <div className="flex-md-grow-1">
          <label
            htmlFor="keyword"
            className="form-label text-light fw-bold "
          >
            {t('home_search_label')}
          </label>
          <input
            type="text"
            className="form-control"
            id="keyword"
            placeholder={t('home_search_input_placeholder')}
            onChange={handleChange}
            value={keyword}
          />
        </div>
        <div className="ms-md-3 mt-3 d-grid gap-2 d-md-flex align-items-end">
          <button
            type="submit"
            className="btn btn-dark text-info w-100"
          >
            {t('home_search_button')}
          </button>
        </div>
      </Card>
    </form>
  );
}

export default Form;