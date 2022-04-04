import { lazy, Suspense } from 'react';

const Renter = lazy(() => import('./index'));

const route = {
  path: '/renter',
  element: (
    <Suspense fallback={<>...</>}>
      <Renter />
    </Suspense>
  ),
};

export default route;
