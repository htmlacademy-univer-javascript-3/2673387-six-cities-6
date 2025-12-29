import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app.tsx';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuthAction, fetchOffersAction} from './store/api-action.ts';
import {BrowserRouter} from 'react-router-dom';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
