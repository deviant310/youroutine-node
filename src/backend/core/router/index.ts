import { join, parse } from "path";
import { Express, Request, Response } from "express";

import { Route, Routable, RouteOptions } from "./route";

const controllersContext = require.context('controllers', false, /\.ts$/);

class Router {
  private readonly app: Express;
  
  constructor(app: Express) {
    this.app = app;
    
    for(let key of controllersContext.keys()){
      this.handleController(key);
    }
  }
  
  private handleController(key: string){
    const controller = controllersContext(key).default;
    const controllerName = parse(key).name;
    
    const routableCollection: Routable[] = Array.isArray(controller) ? controller : [controller];
  
    for(let getRoutes of routableCollection)
      this.handleRoutes(getRoutes, controllerName);
  }
  
  private handleRoutes(getRoutes: Routable, routesPrefix: string){
    const routes = getRoutes();
    
    for(let route of routes)
      this.handleRoute(route, {
        prefix: routesPrefix,
        handlers: routes.middleware
      });
  }
  
  private handleRoute(route: Route, options: RouteOptions){
    const { prefix, handlers } = options;
    
    const {
      method: requestMethod,
      path: requestPath,
      response: responseHandler
    } = route;

    const method = requestMethod;
    const path = join(`/${prefix || ''}`, requestPath);

    this.app[method](path, ...handlers || [], async (request: Request, response: Response) => {
      const { error, message } = await responseHandler(request)
        .then(message => ({error: false, message}))
        .catch(({message}) => ({error: true, message}));
  
      response.status(error ? 404 : 200).send(message);
    });
  }
}

export default Router;