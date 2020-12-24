import { Express } from "express";

import runCommand from "core/console";
import migrate from "core/migrate";
import Router from "core/router";
import applySession from "core/session";

async function bootstrap(app: Express) {
  await migrate();
  applySession(app);
  new Router(app);
}

export { bootstrap, runCommand };