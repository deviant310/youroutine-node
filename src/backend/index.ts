declare const STORAGE_PATH: string;

import { resolve, parse } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";
import express, { Express, Request, Response } from "express";

import { ControllersContext, ControllerRequestParams } from "types/api";
import { ControllerConstructor, Controller, ControllerMethod } from "types/controller";

const controllers: ControllersContext = require.context('controllers', false, /\.ts$/);
const migrations = require.context('migrations', false, /\.ts$/);

const migrate = async () => {
  const dataFilePath = resolve(STORAGE_PATH, 'migrations.json');
  const existedData: { [key: string]: any } = existsSync(dataFilePath) ? JSON.parse(readFileSync(dataFilePath).toString()) : {};
  
  const data = await migrations.keys()
    .reduce((p, rawKey) => p.then(async (obj: { [key: string]: any }) => {
      const key = parse(rawKey).name;

      if(existedData[key])
        return obj;
      
      const Migration = migrations(rawKey).default;
      const migration = new Migration;
      
      await migration.up();
      
      obj[key] = { key, time: new Date().toLocaleString('ru') };
      return obj;
    }), Promise.resolve({}));
  
  writeFileSync(dataFilePath, JSON.stringify({...existedData, ...data}, null, 2));
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