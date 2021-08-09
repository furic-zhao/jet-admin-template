import { lazy } from 'react'

const verticalBar = lazy(() => import('./pages/vertical-bar'))
const horizontalBar = lazy(() => import('./pages/horizontal-bar'))
const barStack = lazy(() => import('./pages/bar-stack'))
const pieSimple = lazy(() => import('./pages/pie-simple'))
const lineSimple = lazy(() => import('./pages/line-simple'))
const pieDoughnut = lazy(() => import('./pages/pie-doughnut'))
const Radar = lazy(() => import('./pages/radar'))
const Funnel = lazy(() => import('./pages/funnel'))

export default [
  { path: '/charts/echarts/vertical-bar', component: verticalBar },
  { path: '/charts/echarts/horizontal-bar', component: horizontalBar },
  { path: '/charts/echarts/bar-stack', component: barStack },
  { path: '/charts/echarts/pie-simple', component: pieSimple },
  { path: '/charts/echarts/line-simple', component: lineSimple },
  { path: '/charts/echarts/pie-doughnut', component: pieDoughnut },
  { path: '/charts/echarts/radar', component: Radar },
  { path: '/charts/echarts/funnel', component: Funnel }
]
