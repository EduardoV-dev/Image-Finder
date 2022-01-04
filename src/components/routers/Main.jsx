import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, Image } from '@components/containers';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image/:id" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;