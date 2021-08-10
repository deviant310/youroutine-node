import { resolve } from 'path';
import { AddressInfo } from 'net';

import { config as setEnv } from 'dotenv';
import express, { Express } from 'express';
import minimist from 'minimist';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import { Console, DB, Http, importAll } from '@jsway/interior';

import dbConfig from 'config/db';
import httpConfig from 'config/http';

setEnv();

const {
  NODE_ENV = 'development',
  IS_COMMAND = false,
  APP_PUBLIC_DIR = './build/public',
  APP_STORAGE_DIR = './storage',
  APP_HOST = 'localhost',
  APP_PORT = 3000
}: {
  NODE_ENV?: string;
  IS_COMMAND?: boolean;
  APP_PUBLIC_DIR?: string;
  APP_STORAGE_DIR?: string;
  APP_HOST?: string;
  APP_PORT?: number;
} = dotenvParse(process.env as Parsed);

const app: Express = express();

(async () => {
  Console
    .setCommandsConfig({
      allowCommandsExecution: NODE_ENV !== 'production'
    })
    .setCommands(importAll(require.context('./console/commands', false, /\.ts$/)));
  
  await DB
    .setConfig(dbConfig)
    .setMigrations(importAll(require.context('./db/migrations', false, /\.ts$/)))
    .setMigrationsLogPath(resolve(APP_STORAGE_DIR, 'migrations.json'))
    .init();
  
  if (IS_COMMAND) {
    const { _: commands, ...options } = minimist(process.argv.slice(2));
    const [command] = commands;
    
    const exitCode = await Console.runCommand(command, options);
    
    process.exit(exitCode);
  } else {
    await import('http/routes');
    
    Http
      .setConfig(httpConfig)
      .setApp(app)
      .setControllers(importAll(require.context('./http/controllers', true, /\.ts$/)))
      .setMiddlewares(importAll(require.context('./http/middlewares', true, /\.ts$/)))
      .setStaticPath(resolve(APP_PUBLIC_DIR))
      .init();
    
    const listener = app.listen(APP_PORT, APP_HOST, () => {
      const { address, port } = listener.address() as AddressInfo;
      console.log(`App is running on http://${address}:${port}\n`);
    });
  }
})();
