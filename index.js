const { resolve } = require('path');

const { config: setEnv } = require('dotenv');
const dotenvParse = require('dotenv-parse-variables');

const { buildDir, sourceDir } = require('./config.json');
const webpackConfig = require('./webpack.config.js');
const { build, checkBuild } = require('./utils/compiler.js');
const { demon, serve } = require('./utils/server');

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

const buildPath = resolve(buildDir);

(async () => {
  if (IS_PRODUCTION || IS_COMMAND) {
    checkBuild(buildPath);
  } else {
    await build({ webpackConfig, watch: true });
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
