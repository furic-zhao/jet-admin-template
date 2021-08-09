import { lazy } from 'react';

const page403 = lazy(() => import('./pages/403'))
const page404 = lazy(() => import('./pages/404'))
const page500 = lazy(() => import('./pages/500'))

export default [
  { path: '/exception/403', component: page403 },
  { path: '/exception/404', component: page404 },
  { path: '/exception/500', component: page500 },
]
