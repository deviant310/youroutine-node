import { resolve } from 'path';

import { config as setEnv } from 'dotenv';
import express, { Express } from 'express';
import minimist from 'minimist';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import { Console, DB, Http, importAll } from '@foobar/nojo';

import dbConfig from 'config/db';
import httpConfig from 'config/http';

setEnv();

const {
  NODE_ENV = 'development',
  IS_COMMAND = false,
  APP_STORAGE_DIR = './storage'
}: {
  NODE_ENV?: string;
  IS_COMMAND?: boolean;
  APP_STORAGE_DIR?: string;
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
      .init();
  }
})();
