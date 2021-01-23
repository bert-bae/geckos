import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

type RouteConfig = {
  path: string;
  Component: any;
  routes?: RouteConfig[];
};

const routes: RouteConfig[] = [
  {
    path: '/task-list/:id',
    Component: React.lazy(() => import('../../pages/task-list'))
  },
  {
    path: '/task-details/:id',
    Component: React.lazy(() => import('../../pages/task-details'))
  },
  {
    path: '/login',
    Component: React.lazy(() => import('../../pages/login'))
  }
];

type ApplicationRouterProps = {
  children?: React.ReactNode;
};

const ApplicationRouter = ({ children }: ApplicationRouterProps) => (
  <React.Suspense fallback={<LoadingMessage />}>
    <BrowserRouter>
      {children}
      <SwitchList routes={routes} />
    </BrowserRouter>
  </React.Suspense>
);

type SwitchListProps = {
  routes: RouteConfig[];
};

const SwitchList = ({ routes }: SwitchListProps) => (
  <Switch>
    {routes?.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
);

const LoadingMessage = () => <div>Loading...</div>;

const RouteWithSubRoutes = ({ path, Component, routes }: RouteConfig) => (
  <Route
    path={path}
    render={(props) => (
      <>
        <Component {...props} />
        {routes && <SwitchList routes={routes} />}
      </>
    )}
  />
);

export default ApplicationRouter;
