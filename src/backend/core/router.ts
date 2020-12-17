import { join, parse } from "path";
import { Express, Request, Response } from "express";

import Route from "core/route";

const controllersContext = require.context('controllers', false, /\.ts$/);

export default function(app: Express) {
  for(let key of controllersContext.keys()){
    const routes: Route<any, any, any>[] = controllersContext(key).default;
    const controllerName = parse(key).name;
    
    for(let route of routes){
      const { method, path, bodyParser, response: responseHandler } = route;
      
      app[method](join(`/${controllerName}`, path), bodyParser, async (request: Request, response: Response) => {
        const { error, message } = await responseHandler(request)
          .then(message => ({error: false, message}))
          .catch(({message}) => ({error: true, message}));
        
        response.status(error ? 404 : 200).send(message);
      });
    }
  }
}