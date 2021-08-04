import { resolve } from 'path';
import { AddressInfo } from 'net';

import { config as setEnv } from 'dotenv';
import express, { Express } from 'express';
import minimist from 'minimist';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import Interior, { ConsoleFactory, importAll } from '@jsway/interior';

import dbConfig from 'config/db';
import routes from 'config/routes.json';

setEnv();

const {
  IS_COMMAND = false,
  APP_PUBLIC_DIR = './build/public',
  APP_STORAGE_DIR = './storage',
  APP_HOST = 'localhost',
  APP_PORT = 3000
}: {
  IS_COMMAND?: boolean
  APP_PUBLIC_DIR?: string
  APP_STORAGE_DIR?: string
  APP_HOST?: string
  APP_PORT?: number
} = dotenvParse(process.env as Parsed);

const app: Express = express();

(async () => {
  Interior.initConsole({
    commandsFactory: importAll(require.context('./console/commands', false, /\.ts$/))
  });
  
  await Interior.initDB(dbConfig, {
    migrationsFactory: importAll(require.context('./db/migrations', false, /\.ts$/)),
    migrationsStoragePath: resolve(APP_STORAGE_DIR, 'migrations.json')
  });
  
  await Interior.initSession(app);
  
  if (IS_COMMAND) {
    const { _: commands, ...options } = minimist(process.argv.slice(2));
    const [command] = commands;
    
    const exitCode = await ConsoleFactory.runCommand(command, options);
    
    process.exit(exitCode);
  } else {
    Interior.initHttp(app, {
      publicPath: resolve(APP_PUBLIC_DIR),
      routesConfig: routes,
      controllersFactory: importAll(require.context('./http/controllers', false, /\.ts$/))
    });
    
    const listener = app.listen(APP_PORT, APP_HOST, () => {
      const { address, port } = listener.address() as AddressInfo;
      console.log(`App is running on http://${address}:${port}\n`);
    });
  }
})();
