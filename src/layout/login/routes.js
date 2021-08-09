import { lazy } from 'react';

const Login = lazy(() => import('./pages/login'))
const Register = lazy(() => import('./pages/register'))
const RegisterResult = lazy(() => import('./pages/register-result'))

export default [
  { path: '/user/login', component: Login },
  { path: '/user/register', component: Register },
  { path: '/user/register-result', component: RegisterResult },
]
