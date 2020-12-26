import { join, parse } from "path";
import { Express, NextFunction, Request, Response } from "express";

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
  
    for(let getRoutes of routableCollection){
      const routesPrefix = controllerName !== 'index' ? controllerName : void(0);
      this.handleRoutes(getRoutes, routesPrefix);
    }
  }
  
  private handleRoutes(getRoutes: Routable, routesPrefix?: string){
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
    const path = typeof requestPath === 'string' ? join(`/${prefix || ''}`, requestPath) : requestPath;
    
    this.app[method](path, ...handlers || [], async (request: Request, response: Response, next: NextFunction) => {
      if(typeof responseHandler === 'function'){
        const { error, message } = await responseHandler(request)
          .then(message => ({error: false, message}))
          .catch(({message}) => ({error: true, message}));
  
        response.status(error ? 404 : 200).send(message);
      } else {
        next();
      }
    });
  }
}

export default Router;