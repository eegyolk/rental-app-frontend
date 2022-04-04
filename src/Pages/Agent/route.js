import { lazy, Suspense } from 'react';

const Agent = lazy(() => import('./index'));

const route = {
  path: '/agent',
  element: (
    <Suspense fallback={<>...</>}>
      <Agent />
    </Suspense>
  ),
};

export default route;
