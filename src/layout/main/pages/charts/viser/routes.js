import { lazy } from 'react'

const liquidFillGauge = lazy(() => import('./pages/liquid-fill-gauge'))
const pieRanged = lazy(() => import('./pages/pie-ranged'))


export default [
  { path: '/charts/viser/liquid-fill-gauge', component: liquidFillGauge },
  { path: '/charts/viser/pie-ranged', component: pieRanged }
]
