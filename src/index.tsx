import './sass/index.scss';

import reportWebVitals from './reportWebVitals';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const Main = lazy(() => import('./components/Main'));
const domNode = document.getElementById('app');

if (domNode) {
  const root = createRoot(domNode);
    
  root.render(
    <Suspense>
      <Main />
    </Suspense>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
