const { resolve } = require('path');

const { config: setEnv } = require('dotenv');
const dotenvParse = require('dotenv-parse-variables');

const compile = require('../utils/compiler');
const { demon, serve } = require('../utils/server');

setEnv();

const {
  NODE_ENV,
  IS_COMMAND,
  APP_BUILD_DIR,
  APP_DEV_INSPECT,
  APP_DEV_INSPECT_BRK,
  APP_DEV_INSPECT_CMD,
  APP_DEV_INSPECT_CMD_BRK
} = {
  NODE_ENV: 'development',
  IS_COMMAND: false,
  APP_BUILD_DIR: './build',
  APP_DEV_INSPECT: false,
  APP_DEV_INSPECT_BRK: false,
  APP_DEV_INSPECT_CMD: false,
  APP_DEV_INSPECT_CMD_BRK: false,
  ...dotenvParse(process.env)
};

const IS_PRODUCTION = NODE_ENV === 'production';

const buildPath = resolve(APP_BUILD_DIR);

(async () => {
  if (IS_COMMAND) {
    serve(buildPath, {
      inspect: APP_DEV_INSPECT_CMD,
      breakOnStart: APP_DEV_INSPECT_CMD_BRK
    });
  } else {
    if (IS_PRODUCTION) {
      serve(buildPath);
    } else {
      await compile({ watch: true })
        .catch(process.exit);
      
      demon(buildPath, {
        watchPath: resolve(buildPath, 'index.js'),
        inspect: APP_DEV_INSPECT,
        breakOnStart: APP_DEV_INSPECT_BRK
      });
    }
  }
})();
