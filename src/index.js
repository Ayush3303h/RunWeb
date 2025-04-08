import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Codepen from './RunWeb.js';
import { BrowserRouter } from 'react-router-dom';
import RunWeb from './RunWeb.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RunWeb />
  </BrowserRouter>
);