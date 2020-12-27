import { Express, Request, RequestHandler } from "express";

import routes from "config/routes";

export type Route<Params = any, Body = any, Response = any> = {
  method: keyof Express;
  path: string | RegExp;
  response?(request: Request<Params, Response, Body>): Promise<Response>;
};

export type Middleware = RequestHandler[];

export type RouteOptions = {
  prefix?: string;
  middleware?: Middleware;
}

export type Routable<RouteType = Route> = () => {
  [Symbol.iterator](): Iterator<RouteType>;
  middleware?: Middleware;
}

export type RoutableStatic = {
  routeName?: string;
}

export const withMiddleware = (getRoutes: Routable, ...handlers: Middleware) : Routable => (() => {
  const routes = getRoutes();
  Object.defineProperty(routes, 'middleware', {
    enumerable: false,
    value: handlers
  });
  
  return routes;
});

export const routePath = (key: keyof typeof routes) => {
  return routes[key];
}