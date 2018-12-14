import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';

import App from './app/app';

render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root')
);
