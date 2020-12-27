import { Express } from "express";

import runCommand from "core/console";
import migrate from "core/migrate";
import Router from "core/router";
import applySession from "core/session";
import routes from "config/routes";

async function bootstrap(app: Express) {
  await migrate();
  applySession(app);
  new Router(app);
}

export { bootstrap, routes, runCommand };