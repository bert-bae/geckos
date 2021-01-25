import React from 'react';
import { RouteConfig } from './router';

const routes: RouteConfig[] = [
  {
    path: '/task-list/:id',
    component: React.lazy(() => import('pages/task-list')),
    routes: [
      {
        path: '/task-list/:id/something',
        component: React.lazy(() => import('pages/task-details'))
      }
    ]
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
