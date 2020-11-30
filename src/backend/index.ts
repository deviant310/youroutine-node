import express, { Express, Request, Response } from "express";

import { ControllersContext, ControllerRequestParams } from "types/middleware";
import { ControllerConstructor, Controller, ControllerMethod } from "types/controller";

const controllers: ControllersContext = require.context('controllers', false, /\.ts$/);
const migrations = require.context('migrations', false, /\.ts$/);

const migrate = async() => {
  for (let key of migrations.keys()){
    const Migration = migrations(key).default;
    const migration = new Migration;
    await migration.up();
  }
}

const applyRoutes = (app: Express) => {
  app.post('/api/:controller/:action', express.json(), (request: Request<ControllerRequestParams>, response: Response) => {
    const params: ControllerRequestParams = request.params;
    const { controller: controllerName, action: actionName } = params;
    const { body } = request;
    const Controller: ControllerConstructor = controllers(`./${controllerName}.ts`).default;
    const controller: Controller = new Controller;
    const action: ControllerMethod = controller[actionName];
    const message = action(body);
    
    response.send(message);
  });
}

const bootstrap = async (app: Express) => {
  await migrate();
  applyRoutes(app);
}

export default bootstrap;