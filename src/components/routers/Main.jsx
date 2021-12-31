import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import cookies from 'js-cookie';

import { Home, ImgView } from '@components/containers';
import { LANG_COOKIE } from '@consts/langs';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to={`/${cookies.get(LANG_COOKIE)}`} />}
        />
        <Route path={`/${cookies.get(LANG_COOKIE)}`} element={<Home />} />
        <Route path={`/${cookies.get(LANG_COOKIE)}/image/:id`} element={<ImgView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;