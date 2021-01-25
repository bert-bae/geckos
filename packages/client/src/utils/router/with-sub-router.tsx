import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteConfig, RouteWithSubRoutes } from './router';

export type SubRouterProps = {
  routes: RouteConfig[];
};

export const SubRouter = ({ routes }: SubRouterProps) => (
  <Switch>
    {routes?.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
);

export interface ISubRoute {
  routes: RouteConfig[];
}

export function withSubRouter<T extends ISubRoute = ISubRoute>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithSubRouter = (props: T) => {
    return (
      <>
        <WrappedComponent {...(props as T)} />
        <SubRouter routes={props.routes} />
      </>
    );
  };

  ComponentWithSubRouter.displayName = `withSubRouter(${displayName})`;

  return ComponentWithSubRouter;
}
