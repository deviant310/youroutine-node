const { resolve } = require('path');

const { config: setEnv } = require('dotenv');
const dotenvParse = require('dotenv-parse-variables');

const compile = require('../utils/compiler');

setEnv();

const {
  APP_SOURCE_DIR,
  APP_BUILD_DIR
} = {
  APP_SOURCE_DIR: './src',
  APP_BUILD_DIR: './build',
  ...dotenvParse(process.env)
};

const sourcePath = resolve(APP_SOURCE_DIR);
const buildPath = resolve(APP_BUILD_DIR);

compile(sourcePath, buildPath)
  .catch(process.exit);
