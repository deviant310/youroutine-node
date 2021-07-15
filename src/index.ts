import { readdirSync } from 'fs';
import { resolve, parse } from 'path';
import { AddressInfo } from 'net';

import { config as setEnv } from 'dotenv';
import express, { Express } from 'express';
import minimist from 'minimist';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import { red } from 'chalk';
import {
  console as initConsole,
  db as initDB,
  http as initHttp,
  session as initSession
} from '@jsway/interior';
import Console from '@jsway/interior/core/console';
import getModulesFactory from '@jsway/interior/utils/modules-factory';

import dbConfig from 'config/db';
import routes from 'config/routes';

setEnv();

const {
  IS_COMMAND = false,
  APP_HOST = 'localhost',
  APP_PORT = 3000
}: {
  IS_COMMAND?: boolean
  APP_HOST?: string
  APP_PORT?: number
} = dotenvParse(process.env as Parsed);

const app: Express = express();

(async () => {
  const commandsFactory = getModulesFactory('./console/commands');
  const migrations = readdirSync(resolve('db/migrations'));
  const controllers = readdirSync(resolve('http/controllers'));
  // initConsole({ commands });
  
  await initDB(dbConfig, {
    migrations,
    storagePath: resolve('./storage')
  });
  
  await initSession(app);
  
  if (IS_COMMAND) {
    const { _: commands, ...options } = minimist(process.argv.slice(2));
    const [command] = commands;
    const exitCode = await Console.runCommand(command, options)
      .catch((e: { message: string }) => {
        console.error(red(e.message));
        return 1;
      });
    
    process.exit(exitCode);
  } else {
    initHttp(app, {
      publicPath: resolve('./build/public'),
      routesConfig: routes,
      controllers
    });
    
    const listener = app.listen(APP_PORT, APP_HOST, () => {
      const { address, port } = listener.address() as AddressInfo;
      console.log(`App is running on http://${address}:${port}\n`);
    });
  }
})();
