import { Express } from "express";

import Model from "core/db/model";
import Console from "core/console";
import Router from "core/router";
import { applySession, migrate } from "core";

const { setContext: setModelContext } = Model;
const { setContext: setConsoleContext, runCommand } = Console;

setModelContext(require.context('models', false, /\.ts$/));
setConsoleContext(require.context('commands', false, /\.ts$/));

const routes = require("config/routes").default;

async function bootstrap(app: Express) {
  await migrate();
  applySession(app);
  new Router(app);
}

export { bootstrap, routes, runCommand };