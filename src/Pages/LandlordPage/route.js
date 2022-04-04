import { lazy, Suspense } from 'react';

const LandlordPage = lazy(() => import('./index'));

const route = {
  path: '/landlord',
  element: (
    <Suspense fallback={<>...</>}>
      <LandlordPage />
    </Suspense>
  ),
};

export default route;
