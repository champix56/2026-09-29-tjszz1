import { lazy, Suspense, ComponentProps } from 'react';

const LazyNavbar = lazy(() => import('./Navbar'));

const Navbar = (props: ComponentProps<typeof LazyNavbar>) => (
  <Suspense fallback={null}>
    <LazyNavbar {...props} />
  </Suspense>
);

export default Navbar;
