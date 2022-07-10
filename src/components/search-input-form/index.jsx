import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { loadTerm } from '@redux/images';
import { keywordOnChange, setFirstRender } from '@redux/form';

const SearchInputForm = ({ id }) => {
    /* --- Hooks --- */

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { t } = useTranslation();
    const { search } = useLocation();
    const { form, images } = useSelector((state) => state);

    /* --- State --- */

    const { query = '' } = queryString.parse(search);
    const { keyword, firstRender } = form;
    const { term } = images;

    /* --- Effects --- */

    useEffect(() => {
        /* For dispatching only in the first render */
        if (!firstRender) return;

        /* Loads query string into the form input value */
        dispatch(keywordOnChange(query));

        /* Loads the term for fetching automatically the images
            by the term
        */
        dispatch(loadTerm(query));

        dispatch(setFirstRender(false));
    }, [firstRender, query, dispatch]);

    /* --- Handlers --- */

    const handleChange = ({ target: { value } }) =>
        dispatch(keywordOnChange(value));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (term === keyword) return;

        dispatch(loadTerm(keyword));
        navigate(`/${keyword === '' ? '' : `?query=${keyword}`}`);
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
    /* Prop due to testing need */
    id: PropTypes.string.isRequired,
};

export default SearchInputForm;
