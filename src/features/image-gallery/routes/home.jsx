import { Layout } from '@components';
import { Form, Heading, MasonryGallery } from '../components';
import { useInitialTermLoad } from '../api';

const Home = () => {
    /* --- Hooks --- */

    useInitialTermLoad();

    return (
        <Layout bgColor="dark" searchInputType="animated-on-scroll">
            <Heading />
            <Form />
            <MasonryGallery />
        </Layout>
    );
};

export default Home;
