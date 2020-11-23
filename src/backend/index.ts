import express, { Express, Request, Response } from "express";
import {
  ControllerConstructor,
  Controller,
  ControllersContext,
  ControllerRequest
} from "types/middleware";

const controllers: ControllersContext = require.context('controllers', false, /\.ts$/);
const keys = controllers.keys();

type ControllersImports = typeof keys;
type ControllerRequestParams = ControllerRequest<ControllersImports>;

const middleware = (app: Express) => {
  app.post('/api/:controller/:action', express.json(), (request: Request<ControllerRequestParams>, response: Response) => {
    const params: ControllerRequestParams = request.params;
    const { controller: controllerName, action: actionName } = params;
    const { body } = request;
    const Controller: ControllerConstructor = controllers(`./${controllerName}.ts`).default;
    const controller: Controller = new Controller;
    const action = controller[actionName];
    const message = action(body);
    
    response.send(message);
  });
}

export default middleware;