// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import Router from './Router.tsx';
import { SEOWrapper, SWRWrapper } from '@/wrappers';
// Context
import { GlobalProvider } from '@/contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <SEOWrapper>
      <SWRWrapper>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </SWRWrapper>
    </SEOWrapper>
  </GlobalProvider>
);
