import { Express, Request, RequestHandler } from "express";

type Route<Params = any, Body = any, Response = any> = {
  method: keyof Express;
  path: string | RegExp;
  response?(request: Request<Params, Response, Body>): Promise<Response>;
};

type Middleware = RequestHandler[];

type RouteOptions = {
  prefix?: string;
  handlers?: Middleware;
}

type Routable<RouteType = Route> = () => {
  [Symbol.iterator](): Iterator<RouteType>;
  middleware?: Middleware;
}

const withMiddleware = (getRoutes: Routable, ...handlers: Middleware) : Routable => (() => {
  const routes = getRoutes();
  Object.defineProperty(routes, 'middleware', {
    enumerable: false,
    value: handlers
  });
  
  return routes;
});

export { withMiddleware, Route, Routable, RouteOptions };