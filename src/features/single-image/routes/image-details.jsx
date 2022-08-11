import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import { Layout } from '@components';
import { Data, Picture } from '../components';
import useImageDetails from './useImageDetails';

const ImageDetails = () => {
    /* ---  Hooks --- */

    const { id } = useParams();

    useImageDetails(id);

    return (
        <Layout
            bgColor="sky-blue"
            searchInputType="not-animated"
            className="pt-5"
        >
            <Container>
                <Row className="justify-content-sm-between gap-3">
                    <Col xs={12} lg={7}>
                        <Picture />
                    </Col>
                    <Col xs={12} lg={4}>
                        <Data />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default ImageDetails;
