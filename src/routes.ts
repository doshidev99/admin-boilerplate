import { lazy } from 'react'
import { IRoutes } from 'models'

import { AdminLayout } from 'components/Layout'
import AuthGuard from 'guards/AuthGuard'
import GuestGuard from 'guards/GuestGuard'

const LoginPage = lazy(() => import('features/auth'))

const DashboardPage = lazy(() => import('features/dashboard'))

export const routes: IRoutes[] = [
  {
    path: '/',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: DashboardPage,
  },
  {
    path: '/login',
    exact: false,
    guard: GuestGuard,
    component: LoginPage,
  },
]
