import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app.tsx';
import {MOCKED_OFFERS} from './mocks/offers.ts';

const config = {
  offers: MOCKED_OFFERS
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={config.offers} />
  </React.StrictMode>
);
