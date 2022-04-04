import { lazy, Suspense } from 'react';

const SearchPage = lazy(() => import('./index'));

const route = {
  path: '/search',
  element: (
    <Suspense fallback={<>...</>}>
      <SearchPage />
    </Suspense>
  ),
};

export default route;
