import { lazy } from 'react';

const Step1 = lazy(() => import('./pages/step1'))
const Step2 = lazy(() => import('./pages/step2'))
const Step3 = lazy(() => import('./pages/step3'))

export default [
  { path: '/form/step-form/step1', component: Step1 },
  { path: '/form/step-form/step2', component: Step2 },
  { path: '/form/step-form/step3', component: Step3 }
]
