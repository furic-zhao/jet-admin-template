import { lazy } from 'react';

const dashboard = lazy(() => import('./pages/dashboard')) //首页面板
const basicForm = lazy(() => import('./pages/basic-form')) //基本表单
const stepForm = lazy(() => import('./pages/step-form')) //分布表单
const basicTable = lazy(() => import('./pages/basic-table')) //基本表格
const searchTable = lazy(() => import('./pages/search-table')) //高级表格
const echarts = lazy(() => import('./pages/charts/echarts')) //echarts图表
const viser = lazy(() => import('./pages/charts/viser')) //echarts图表

export default [
  { path: '/dashboard', name: 'dashboard', component: dashboard },
  { path: '/form/basic-form', name: 'basicForm', component: basicForm },
  { path: '/form/step-form', name: 'stepForm', component: stepForm },
  { path: '/table/basic-table', name: 'basicTable', component: basicTable },
  { path: '/table/search-table', name: 'searchTable', component: searchTable },
  { path: '/charts/echarts', name: 'echarts', component: echarts },
  { path: '/charts/viser', name: 'viser', component: viser }
]
