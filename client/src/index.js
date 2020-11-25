import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import BackToTop from './utils/backToTop';
import './index.css';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <BackToTop />
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// For development purpose
if (module.hot) {
  module.hot.accept();
}
