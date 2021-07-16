const { resolve } = require('path');

const { config: setEnv } = require('dotenv');
const dotenvParse = require('dotenv-parse-variables');

const { sourceDir, buildDir, storageDir } = require('../config.json');
const compile = require('../utils/compiler');
const exportStats = require('../utils/stats');
const { demon, serve } = require('../utils/server');

setEnv();

const {
  NODE_ENV,
  IS_COMMAND,
  APP_DEV_INSPECT,
  APP_DEV_INSPECT_BRK,
  APP_DEV_INSPECT_CMD,
  APP_DEV_INSPECT_CMD_BRK
} = {
  NODE_ENV: 'development',
  IS_COMMAND: false,
  APP_DEV_INSPECT: false,
  APP_DEV_INSPECT_BRK: false,
  APP_DEV_INSPECT_CMD: false,
  APP_DEV_INSPECT_CMD_BRK: false,
  ...dotenvParse(process.env)
};

const IS_PRODUCTION = NODE_ENV === 'production';

const sourcePath = resolve(sourceDir);
const storagePath = resolve(storageDir);
const migrationsSourcePath = resolve(sourcePath, 'db/migrations');
const migrationsStoragePath = resolve(storagePath, 'migrations.json');
const buildPath = resolve(buildDir);

(async () => {
  if (!IS_PRODUCTION && !IS_COMMAND) {
    await compile(sourcePath, buildPath);

    exportStats(migrationsSourcePath, migrationsStoragePath);

    // const existedMigrationData: MigrationData = existsSync(migrationsStoragePath) ? JSON.parse(readFileSync(migrationsStoragePath).toString()) : {};
    const migrationData = await Object.entries(migrationsFactory)
      .sort(([, { createdAt: nextCreatedAt }], [, { createdAt: currentCreatedAt }]) => {
        return nextCreatedAt.getTime() - currentCreatedAt.getTime();
      })
      .reduce((p, [key, { module: MigrationClass }]) => p.then(async (obj: Record<string, Date>) => {
      const migration = new MigrationClass();

      await migration.up();

      obj[key] = new Date();
      return obj;
    }), Promise.resolve({}));

    /* writeFileSync(dataFilePath, JSON.stringify({
      ...existedMigrationData,
      ...migrationData
    }, null, 2)); */
  }

  if (IS_COMMAND) {
    serve(buildPath, {
      inspect: APP_DEV_INSPECT_CMD,
      breakOnStart: APP_DEV_INSPECT_CMD_BRK
    });
  } else {
    if (IS_PRODUCTION) {
      serve(buildPath);
    } else {
      demon(buildPath, {
        watchPath: resolve(sourceDir),
        inspect: APP_DEV_INSPECT,
        breakOnStart: APP_DEV_INSPECT_BRK
      });
    }
  }
})();
