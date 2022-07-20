import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Image, NotFound } from '@pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<Image />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
