import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app.tsx';

const config = {
  offerCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount={config.offerCount} />
  </React.StrictMode>
);
