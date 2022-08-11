import queryString from 'query-string';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from '@components';
import { Heading, Form, Photos } from '@modules/home';
import { keywordOnChange } from '@store/form';
import { loadTerm } from '@store/images';

const Home = () => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const firstRenderRef = useRef(true);
    const { search } = useLocation();

    /* --- State --- */

    const { query = '' } = queryString.parse(search);

    /* --- Effects --- */

    useEffect(() => {
        if (!firstRenderRef.current) return;

        /* Loads query string into the form input value */
        dispatch(keywordOnChange(query));

        /* Loads the term for automatically fetching the images */
        dispatch(loadTerm(query));

        firstRenderRef.current = false;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout bgColor="dark" searchInputType="animated-on-scroll">
            <Heading />
            <Form />
            <Photos />
        </Layout>
    );
};

export default Home;
