import { lazy, Suspense, ComponentProps } from 'react';

const LazyMemeForm = lazy(() => import('./MemeForm'));

const MemeForm = (props: ComponentProps<typeof LazyMemeForm>) => (
  <Suspense fallback={null}>
    <LazyMemeForm {...props} />
  </Suspense>
);

export default MemeForm;
