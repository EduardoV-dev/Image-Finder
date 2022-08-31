import { Col, Container, Row } from 'react-bootstrap';

import { Layout } from '@components';
import { UserInfo, Picture } from '../components';
import { useImageDetails } from '../api';

const ImageDetails = () => {
    /* ---  Hooks --- */

    useImageDetails();

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
                        <UserInfo />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default ImageDetails;
