import { Express } from "express";

import Console from "core/console";
import migrate from "core/migrate";
import { applyRoutes } from "core/router";

async function bootstrap(app: Express) {
  await migrate();
  applyRoutes(app);
}

export { bootstrap, Console };