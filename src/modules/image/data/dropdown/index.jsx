import { useState } from 'react';

import { Card } from '@components/commons';
import Item from './item';

const style = {
    container: {
        width: '100%',
        maxWidth: '18rem',
        borderRadius: '10px',
        top: '60px',
        left: '50%',
        transform: 'translate(-50%, 0%)',
    },
};

const Dropdown = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <div className="position-relative">
            <div className="d-grid g-2">
                <button
                    type="button"
                    className="btn btn-dark d-block px-5 py-2"
                    onClick={handleShow}
                >
                    Descargar
                </button>
            </div>
            {show && (
                <Card
                    className="position-absolute p-4 bg-info"
                    style={style.container}
                >
                    <h5 className="fs-6 text-light fw-bold text-center mb-3">
                        Tamaño de la imagen
                    </h5>
                    <div className="mb-1">
                        <Item
                            id="small"
                            imgDimentions="100x150"
                            text="Pequeño"
                        />
                        <Item
                            id="normal"
                            imgDimentions="600x500"
                            text="Normal"
                        />
                        <Item
                            id="original"
                            imgDimentions="1920x1080"
                            text="Original"
                        />
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                        <button
                            type="button"
                            className="btn btn-dark me-2 fw-bold text-info flex-grow-1"
                        >
                            Descargar
                        </button>
                        <button type="button" className="btn btn-primary">
                            Abrir
                        </button>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Dropdown;
