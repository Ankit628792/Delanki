import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { RootLayout } from './components/layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDetailPage } from './pages/product/ProductDetailPage';
import { EarlyLearnerPrivacyPolicyPage } from './pages/product/early-learner/EarlyLearnerPrivacyPolicyPage';
import { RespiraPrivacyPolicyPage } from './pages/product/respira/RespiraPrivacyPolicyPage';
import { LoveAlarmPrivacyPolicyPage } from './pages/product/love-alarm/LoveAlarmPrivacyPolicyPage';
import { AirBeamSharePrivacyPolicyPage } from './pages/product/airbeam-share/AirBeamSharePrivacyPolicyPage';

const FallbackComponent = () => {
  return <NotFoundPage />;
};

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: FallbackComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProjectsPage,
});

const earlyLearnerPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/early-learner/privacy-policy',
  component: EarlyLearnerPrivacyPolicyPage,
});

const respiraPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/respira/privacy-policy',
  component: RespiraPrivacyPolicyPage,
});

const loveAlarmPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/love-alarm/privacy-policy',
  component: LoveAlarmPrivacyPolicyPage,
});

const airBeamSharePrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/airbeam-share/privacy-policy',
  component: AirBeamSharePrivacyPolicyPage,
});

// Also support singular /product/ alias
const earlyLearnerPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/early-learner/privacy-policy',
  component: EarlyLearnerPrivacyPolicyPage,
});

const respiraPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/respira/privacy-policy',
  component: RespiraPrivacyPolicyPage,
});

const loveAlarmPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/love-alarm/privacy-policy',
  component: LoveAlarmPrivacyPolicyPage,
});

const airBeamSharePrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/airbeam-share/privacy-policy',
  component: AirBeamSharePrivacyPolicyPage,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/$slug',
  component: ProductDetailPage,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/404',
  component: NotFoundPage,
});

// Splat catch-all route for any undefined paths (e.g. /signin, /login, etc.)
const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '$',
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  earlyLearnerPrivacyPolicyRoute,
  respiraPrivacyPolicyRoute,
  loveAlarmPrivacyPolicyRoute,
  airBeamSharePrivacyPolicyRoute,
  earlyLearnerPrivacyPolicyAliasRoute,
  respiraPrivacyPolicyAliasRoute,
  loveAlarmPrivacyPolicyAliasRoute,
  airBeamSharePrivacyPolicyAliasRoute,
  productDetailRoute,
  privacyPolicyRoute,
  notFoundRoute,
  catchAllRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  trailingSlash: 'never',
  notFoundMode: 'root',
  defaultNotFoundComponent: FallbackComponent,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

