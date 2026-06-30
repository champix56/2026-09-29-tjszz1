import { lazy, Suspense, ComponentProps } from 'react';

const LazyTemplateName = lazy(() => import('./TemplateName'));

const TemplateName = (props: ComponentProps<typeof LazyTemplateName>) => (
  <Suspense fallback={null} >
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
