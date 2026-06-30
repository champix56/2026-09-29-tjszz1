import { lazy, Suspense, ComponentProps } from 'react';

const LazyFlexH1Grow = lazy(() => import('./FlexH1Grow'));

const FlexH1Grow = (props: ComponentProps<typeof LazyFlexH1Grow>) => (
  <Suspense fallback={null}>
    <LazyFlexH1Grow {...props} />
  </Suspense>
);

export default FlexH1Grow;
