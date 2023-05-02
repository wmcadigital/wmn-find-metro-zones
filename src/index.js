// IE 11 support
import 'react-app-polyfill/stable';
// React
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const container = document.getElementById('wmn-find-metro-zones');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
