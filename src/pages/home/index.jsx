import queryString from 'query-string';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from '@components';
import { Heading, Form, Photos, ScrollToTop } from '@modules/home';
import { keywordOnChange } from '@redux/form';
import { loadTerm } from '@redux/images';

const Home = () => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const { search } = useLocation();

    /* --- State --- */

    const { query = '' } = queryString.parse(search);

    /* --- Effects --- */

    useEffect(() => {
        /* Loads query string into the form input value */
        dispatch(keywordOnChange(query));

        /* Loads the term for automatically fetching the images */
        dispatch(loadTerm(query));
    }, [query, dispatch]);

    return (
        <Layout bgColor="dark" searchInputType="animated-on-scroll">
            <Heading />
            <Form />
            <Photos />
            <ScrollToTop />
        </Layout>
    );
};

export default Home;
