import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'flag-icon-css/sass/flag-icons.scss';
import 'react-toastify/dist/ReactToastify.css';

import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,
);
