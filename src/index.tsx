import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app.tsx';
import {store} from './store';
import {Provider} from 'react-redux';
import {fetchOffersAction} from './store/api-action.ts';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
