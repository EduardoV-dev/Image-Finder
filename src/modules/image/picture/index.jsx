import { useSelector } from 'react-redux';

import Category from './category';
import { Image, Spinner, Overlay } from '@components';
import { useLoadedImages } from '@hooks';

const style = {
    pContainer: {
        borderRadius: '0 0 10px 10px',
        backgroundColor: 'rgba(252,252,252,0.4)',
    },
};

const Picture = () => {
    const { photo } = useSelector((state) => state.photo);
    const { isLoaded, handleLoad } = useLoadedImages();

    if (JSON.stringify(photo) === '{}') return null;

    const { alt_description, description, tags, imagesURL } = photo;

    return (
        <div className="position-relative">
            <div className="position-relative">
                <Image
                    src={imagesURL.full}
                    alt={alt_description}
                    onLoad={handleLoad}
                />
                <div className="position-absolute top-0 left-0 p-3 d-flex flex-wrap">
                    {isLoaded &&
                        tags.map((tag) => <Category key={tag}>{tag}</Category>)}
                </div>
                {isLoaded && (
                    <div
                        className="position-absolute bottom-0 left-0 p-2 w-100"
                        style={style.pContainer}
                    >
                        <p className="text-dark fw-bold">{description}</p>
                    </div>
                )}
            </div>
            {!isLoaded && (
                <Overlay>
                    <Spinner />
                </Overlay>
            )}
        </div>
    );
};

export default Picture;
