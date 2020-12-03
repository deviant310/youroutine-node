import { resolve, parse } from "path";
import { statSync, existsSync, readFileSync, writeFileSync } from "fs";
import express, { Express, Request, Response } from "express";

import { ControllersContext, ControllerRequestParams } from "types/api";
import { ControllerConstructor, Controller, ControllerMethod } from "types/controller";

declare const STORAGE_PATH: string;
declare const MIGRATIONS_PATH: string;

const controllers: ControllersContext = require.context('controllers', false, /\.ts$/);
const migrations = require.context('migrations', false, /\.ts$/);

const migrate = async () => {
  const dataFilePath = resolve(STORAGE_PATH, 'migrations.json');
  const existedMigrationData: { [ key: string ]: any } = existsSync(dataFilePath) ? JSON.parse(readFileSync(dataFilePath).toString()) : {};
  const migrationData = await migrations.keys()
    .sort((next, current) => {
      const [
        { birthtimeMs: nextBirthTimeMs },
        { birthtimeMs: currentBirthTimeMs }
      ] = [ next, current ]
        .map(fileBaseName => statSync(resolve(MIGRATIONS_PATH, fileBaseName)));
      
      return nextBirthTimeMs - currentBirthTimeMs;
    })
    .reduce((p, rawKey) => p.then(async (obj: { [ key: string ]: any }) => {
      const key = parse(rawKey).name;
      
      if(existedMigrationData[ key ])
        return obj;
      
      const Migration = migrations(rawKey).default;
      const migration = new Migration;
      
      await migration.up();
      
      obj[ key ] = { key, time: new Date().toLocaleString('ru') };
      return obj;
    }), Promise.resolve({}));
  
  writeFileSync(dataFilePath, JSON.stringify({
    ...existedMigrationData,
    ...migrationData
  }, null, 2));
}

const applyRoutes = (app: Express) => {
  app.post('/api/:controller/:action', express.json(), (request: Request<ControllerRequestParams>, response: Response) => {
    const params: ControllerRequestParams = request.params;
    const { controller: controllerName, action: actionName } = params;
    const { body } = request;
    const Controller: ControllerConstructor = controllers(`./${controllerName}.ts`).default;
    const controller: Controller = new Controller;
    const action: ControllerMethod = controller[ actionName ];
    const message = action(body);
    
    response.send(message);
  });
}

const bootstrap = async (app: Express) => {
  await migrate();
  applyRoutes(app);
}

export default bootstrap;