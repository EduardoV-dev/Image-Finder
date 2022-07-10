import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from '@components';
import { Data, Picture } from '@modules/image';
import { fetchImageById } from '@services/images';
import { loadPhoto } from '@redux/photo';
import { formatImageData } from '@utils/formatData';
import { Container, Row, Col } from 'react-bootstrap';

const Image = () => {
    /* ---  Hooks --- */

    const { id } = useParams();
    const dispatch = useDispatch();

    /* --- Effects --- */

    useEffect(() => {
        fetchImageById(id)
            .then((data) => {
                const image = formatImageData(data.data);
                dispatch(loadPhoto(image));
            })
            .catch(console.log);

        return () => dispatch(loadPhoto({}));
    }, [id, dispatch]);

    return (
        <Layout
            bgColor="sky-blue"
            searchInputType="not-animated"
            className="pt-5"
        >
            <Container>
                <Row className="justify-content-sm-between gap-3">
                    <Col xs={12} md={6} lg={7}>
                        <Picture />
                    </Col>
                    <Col xs={12} md={5} lg={4}>
                        <Data />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Image;
