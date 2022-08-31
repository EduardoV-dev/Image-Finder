import { Layout } from '@components';
import { Form, Heading, MasonryGallery } from '../components';
import { useLoadInitialTerm } from '../hooks';

const Home = () => {
    /* --- Hooks --- */

    useLoadInitialTerm();

    return (
        <Layout bgColor="dark" searchInputType="animated-on-scroll">
            <Heading />
            <Form />
            <MasonryGallery />
        </Layout>
    );
};

export default Home;
