import { lazy, Suspense } from 'react';

const Search = lazy(() => import('./index'));

const route = {
  path: '/search',
  element: (
    <Suspense fallback={<>...</>}>
      <Search />
    </Suspense>
  ),
};

export default route;
