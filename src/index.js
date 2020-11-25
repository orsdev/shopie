import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BackToTop from './utils/backToTop';
import './index.css';

const app = (
  <BrowserRouter>
    <BackToTop />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// For development purpose
if (module.hot) {
  module.hot.accept();
}
