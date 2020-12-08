import { resolve, parse } from "path";
import { statSync, existsSync, readFileSync, writeFileSync } from "fs";
import express, { Express, Request, Response } from "express";

import { ControllerRequestParams } from "types/api";

declare const STORAGE_PATH: string;
declare const MIGRATIONS_PATH: string;

const controllers = require.context('controllers', false, /\.ts$/);
const migrations = require.context('migrations', false, /\.ts$/);
const commands = require.context('commands', false, /\.ts$/);

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
  app.post('/api/:controller/:action', express.json(), async (request: Request<ControllerRequestParams>, response: Response) => {
    const params: ControllerRequestParams = request.params;
    const { controller: controllerName, action: actionName } = params;
    const Controller = controllers(`./${controllerName}.ts`).default;
    const controller = new Controller;
    const controllerAction = controller[ actionName ];
    const message = await controllerAction(request.body);
    
    response.send(message);
  });
}

export const runCommand = async (command: string, options: object) => {
  const CommandClass = commands(`./${command}.ts`).default;
  return (new CommandClass).run(options);
}

export const bootstrap = async (app: Express) => {
  await migrate();
  applyRoutes(app);
}