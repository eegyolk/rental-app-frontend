import { lazy, Suspense } from 'react';

const PropertyPage = lazy(() => import('./index'));

const route = {
  path: '/property',
  element: (
    <Suspense fallback={<>...</>}>
      <PropertyPage />
    </Suspense>
  ),
};

export default route;
