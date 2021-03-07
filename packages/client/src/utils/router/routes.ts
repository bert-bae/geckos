import React from 'react';
import { RouteConfig } from './router';

const routes: RouteConfig[] = [
  {
    path: '/task-list/:id',
    component: React.lazy(() => import('pages/task-list'))
  },
  {
    path: '/',
    component: React.lazy(() => import('pages/projects'))
  },
  {
    path: '/projects',
    component: React.lazy(() => import('pages/projects'))
  },
  {
    path: '/task-details/:id',
    component: React.lazy(() => import('pages/task-details'))
  },
  {
    path: '/login',
    component: React.lazy(() => import('pages/login'))
  }
];

export default routes;
