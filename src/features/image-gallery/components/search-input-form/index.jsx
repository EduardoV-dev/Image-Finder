import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { keywordOnChange } from '../../store/search-slice';
import { useSearchByTerm } from '../../api';

const SearchInputForm = ({ id }) => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
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
        >
            <Form.Group className="flex-grow-1">
                <Form.Control
                    type="text"
                    placeholder={t('home_search_input_placeholder')}
                    onChange={handleChange}
                    value={keyword}
                    {...{ id }}
                />
            </Form.Group>
            <Button
                type="submit"
                variant="dark"
                className="fw-bold ms-sm-2 mt-2 mt-sm-0"
            >
                {t('home_search_button')}
            </Button>
        </Form>
    );
};

SearchInputForm.propTypes = {
    /* id of the input type text. Prop for testing necessities */
    id: PropTypes.string.isRequired,
};

export default SearchInputForm;
