import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

export type RouteConfig = {
  path: string;
  component: any;
  routes?: RouteConfig[];
};

type ApplicationRouterProps = {
  children?: React.ReactNode;
};

const ApplicationRouter = ({ children }: ApplicationRouterProps) => (
  <React.Suspense fallback={<LoadingMessage />}>
    <BrowserRouter>
      {children}
      <Switch>
        {routes?.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

const LoadingMessage = () => <div>Loading...</div>;

export const RouteWithSubRoutes = (route: RouteConfig) => (
  <Route
    path={route.path}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

export default ApplicationRouter;
