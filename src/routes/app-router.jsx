import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Image } from '@pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<Image />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
