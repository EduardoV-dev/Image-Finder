import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@store';
import { keywordOnChange } from '../../store';
import { useSearchByTerm } from '../../hooks';

const SearchInputForm = () => {
    /* --- Hooks --- */

    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const [keyword, search] = useSearchByTerm();

    /* --- Handlers --- */

    const handleChange = ({ target: { value } }) =>
        dispatch(keywordOnChange(value));

    const handleSubmit = (e) => {
        e.preventDefault();

        search();
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="d-flex flex-column flex-sm-row align-items-sm-center"
            data-testid="search-form"
        >
            <Form.Group className="flex-grow-1">
                <Form.Control
                    type="text"
                    placeholder={t('home_search_input_placeholder')}
                    onChange={handleChange}
                    value={keyword}
                    data-testid="search-input"
                />
            </Form.Group>
            <Button
                type="submit"
                variant="dark"
                className="fw-bold ms-sm-2 mt-2 mt-sm-0"
                data-testid="search-button"
            >
                {t('home_search_button')}
            </Button>
        </Form>
    );
};

export default SearchInputForm;
