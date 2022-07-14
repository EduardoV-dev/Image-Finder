import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { debounce } from 'debounce';

import { Home, Image, NotFound } from '@pages';
import { setScrollY } from '@redux/ui';

const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = debounce(
            () => dispatch(setScrollY(window.scrollY)),
            100,
        );

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

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
