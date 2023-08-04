import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouters from './routes';
import './global.d.ts'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>
);