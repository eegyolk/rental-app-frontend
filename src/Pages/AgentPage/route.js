import { lazy, Suspense } from 'react';

const AgentPage = lazy(() => import('./index'));

const route = {
  path: '/agent',
  element: (
    <Suspense fallback={<>...</>}>
      <AgentPage />
    </Suspense>
  ),
};

export default route;
