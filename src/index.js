import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap';
import 'flag-icon-css/sass/flag-icons.scss';

import App from './App';
import { OnWait } from '@components/containers';
import './styles/global.scss';

ReactDOM.render(
  <Suspense fallback={OnWait}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);