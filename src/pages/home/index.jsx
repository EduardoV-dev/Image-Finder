// import { animated, useSpring } from 'react-spring';

import { Layout } from '@components';
import { Heading, Form, Photos, ScrollToTop } from '@modules/home';

const Home = () => (
    <Layout bgColor="dark" searchInputType="animated-on-scroll">
        <Heading />
        <Form />
        <Photos />
        <ScrollToTop />
    </Layout>
);

export default Home;
