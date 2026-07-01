import { lazy, Suspense, ComponentProps } from 'react';

const LazyMemeThumbnail = lazy(() => import('./MemeThumbnail'));

const MemeThumbnail = (props: ComponentProps<typeof LazyMemeThumbnail>) => (
  <Suspense fallback={null}>
    <LazyMemeThumbnail {...props} />
  </Suspense>
);

export default MemeThumbnail;
