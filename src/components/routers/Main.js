import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, ImgView } from '@components/containers';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/es" element={<Home />} />
        <Route path="/en" element={<Home />} />
        <Route path="/image/:id" element={<ImgView />} />
        {/* <LanguageRouter /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;