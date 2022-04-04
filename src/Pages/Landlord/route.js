import { lazy, Suspense } from 'react';

const Landlord = lazy(() => import('./index'));

const route = {
  path: '/landlord',
  element: (
    <Suspense fallback={<>...</>}>
      <Landlord />
    </Suspense>
  ),
};

export default route;
