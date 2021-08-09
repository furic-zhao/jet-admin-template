import { lazy } from 'react';

const mainLayout = lazy(() => import('@/layout/main')) //产品主界面布局
const loginLayout = lazy(() => import('@/layout/login')) //登录/注册布局
const exceptionLayout = lazy(() => import('@/layout/exception')) //异常页布局

export default [
  { path: '/user', name: 'loginLayout', component: loginLayout },
  { path: '/exception', name: 'exceptionLayout', component: exceptionLayout },
  { path: '/', name: 'mainLayout', component: mainLayout },
]
