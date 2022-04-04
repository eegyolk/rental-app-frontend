import { lazy, Suspense } from 'react';

const RenterPage = lazy(() => import('./index'));

const route = {
  path: '/renter',
  element: (
    <Suspense fallback={<>...</>}>
      <RenterPage />
    </Suspense>
  ),
};

export default route;
