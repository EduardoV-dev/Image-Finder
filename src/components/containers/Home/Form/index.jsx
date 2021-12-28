import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import {
  Card,
  Input,
  Button,
  Label,
} from '@components/commons';
import useForm from './useForm';
import styles from './form.module.scss';

const Form = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { t } = useTranslation();
  const { keyword, handleChange, handleSubmit } = useForm();

  return (
    <form
      className="position-relative w-100"
      onSubmit={handleSubmit}
    >
      <Card
        className={`d-md-flex flex-md-row py-5 px-3 mx-auto p-md-5 ${styles.formCard}`}
      >
        <div className="flex-md-grow-1">
          <Label
            htmlFor="keyword"
          >
            {t('home_search_label')}
          </Label>
          <Input
            type="text"
            id="keyword"
            placeholder={t('home_search_input_placeholder')}
            onChange={handleChange}
            value={keyword}
          />
        </div>
        <div className="ms-md-3 mt-3 d-grid gap-2 d-md-flex align-items-end">
          <Button
            type="submit"
            color="dark"
          >
            {t('home_search_button')}
          </Button>
        </div>
      </Card>
    </form>
  );
}

export default Form;