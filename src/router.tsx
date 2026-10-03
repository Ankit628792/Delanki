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
import { VectofiPrivacyPolicyPage } from './pages/product/vectofi/VectofiPrivacyPolicyPage';
import { KurushYarnPrivacyPolicyPage } from './pages/product/kurush-yarn/KurushYarnPrivacyPolicyPage';
import { QrazyPrivacyPolicyPage } from './pages/product/qrazy/QrazyPrivacyPolicyPage';
import { StickyNotesPrivacyPolicyPage } from './pages/product/sticky-notes/StickyNotesPrivacyPolicyPage';
import { JiraGitHubLinkerPrivacyPolicyPage } from './pages/product/jira-github-linker/JiraGitHubLinkerPrivacyPolicyPage';
import { SyntaxStorytellerPrivacyPolicyPage } from './pages/product/syntax-storyteller/SyntaxStorytellerPrivacyPolicyPage';

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

// Privacy Policy Routes (/products/:slug/privacy-policy)
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

const vectofiPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/vectofi/privacy-policy',
  component: VectofiPrivacyPolicyPage,
});

const kurushYarnPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/kurush-yarn/privacy-policy',
  component: KurushYarnPrivacyPolicyPage,
});

const qrazyPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/qrazy/privacy-policy',
  component: QrazyPrivacyPolicyPage,
});

const stickyNotesPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/sticky-notes/privacy-policy',
  component: StickyNotesPrivacyPolicyPage,
});

const jiraGitHubLinkerPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/jira-github-linker/privacy-policy',
  component: JiraGitHubLinkerPrivacyPolicyPage,
});

const syntaxStorytellerPrivacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/syntax-storyteller/privacy-policy',
  component: SyntaxStorytellerPrivacyPolicyPage,
});

// Also support singular /product/:slug/privacy-policy alias
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

const vectofiPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/vectofi/privacy-policy',
  component: VectofiPrivacyPolicyPage,
});

const kurushYarnPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/kurush-yarn/privacy-policy',
  component: KurushYarnPrivacyPolicyPage,
});

const qrazyPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/qrazy/privacy-policy',
  component: QrazyPrivacyPolicyPage,
});

const stickyNotesPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/sticky-notes/privacy-policy',
  component: StickyNotesPrivacyPolicyPage,
});

const jiraGitHubLinkerPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/jira-github-linker/privacy-policy',
  component: JiraGitHubLinkerPrivacyPolicyPage,
});

const syntaxStorytellerPrivacyPolicyAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/syntax-storyteller/privacy-policy',
  component: SyntaxStorytellerPrivacyPolicyPage,
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
  vectofiPrivacyPolicyRoute,
  kurushYarnPrivacyPolicyRoute,
  qrazyPrivacyPolicyRoute,
  stickyNotesPrivacyPolicyRoute,
  jiraGitHubLinkerPrivacyPolicyRoute,
  syntaxStorytellerPrivacyPolicyRoute,
  earlyLearnerPrivacyPolicyAliasRoute,
  respiraPrivacyPolicyAliasRoute,
  loveAlarmPrivacyPolicyAliasRoute,
  airBeamSharePrivacyPolicyAliasRoute,
  vectofiPrivacyPolicyAliasRoute,
  kurushYarnPrivacyPolicyAliasRoute,
  qrazyPrivacyPolicyAliasRoute,
  stickyNotesPrivacyPolicyAliasRoute,
  jiraGitHubLinkerPrivacyPolicyAliasRoute,
  syntaxStorytellerPrivacyPolicyAliasRoute,
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

