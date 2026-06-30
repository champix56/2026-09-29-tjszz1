import { lazy, Suspense, ComponentProps } from 'react';

const LazyFlexV3Grow = lazy(() => import('./FlexV3Grow'));

const FlexV3Grow = (props: ComponentProps<typeof LazyFlexV3Grow>) => (
  <Suspense fallback={null}>
    <LazyFlexV3Grow {...props} />
  </Suspense>
);

export default FlexV3Grow;
