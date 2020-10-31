import express, { Express, Request, Response } from "express";
import {
  ControllerConstructor,
  Controller,
  ControllersImports,
  ControllerRequestParams
} from "types/middleware";

const controllers: ControllersImports = {
  notes: require('controllers/notes').default,
  notes_categories: require('controllers/notes.categories').default,
}

const middleware = (app: Express) => {
  app.post('/api/:controller/:action', express.json(), (request: Request<ControllerRequestParams>, response: Response) => {
    const params: ControllerRequestParams = request.params,
      { controller: controllerName, action: actionName } = params,
      { body } = request,
      Controller: ControllerConstructor = controllers[controllerName],
      controller: Controller = new Controller,
      action = controller[actionName],
      message = action(body);
    
    response.send(message);
  });
}

export default middleware;