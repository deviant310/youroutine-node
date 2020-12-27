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
        middleware: routes.middleware
      });
  }
  
  private handleRoute(route: Route, options: RouteOptions){
    const { prefix, middleware } = options;
    
    const {
      method: requestMethod,
      path: requestPath,
      response: responseHandler
    } = route;

    const method = requestMethod;
    const path = typeof requestPath === 'string' ? join(`/${prefix || ''}`, requestPath) : requestPath;
    
    this.app[method](path, ...middleware || [], async (request: Request, response: Response, next: NextFunction) => {
      if(typeof responseHandler === 'function'){
        const { error, message } = await responseHandler(request)
          .then(message => ({error: false, message}))
          .catch(e => ({
            error: true,
            message: Object
              .getOwnPropertyNames(e)
              .reduce((obj: { [key: string]: any }, key) => {
                const value = e[key];
                obj[key] = value.match(/\n/) ? value.split(/\n/) : value;
                return obj;
              }, {})
          }));
  
        response.status(error ? 404 : 200).send(message);
      } else {
        next();
      }
    });
  }
}

export default Router;