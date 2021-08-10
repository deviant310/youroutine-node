const { resolve, parse } = require('path');
const { readdirSync, lstatSync } = require('fs');

const { config: setEnv } = require('dotenv');
const dotenvParse = require('dotenv-parse-variables');
const NodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');

const { WEBPACK_MODE } = process.env;

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

function parseDirAliases (path) {
  return readdirSync(path).reduce((obj, dirent) => {
    const direntPath = resolve(path, dirent);
    const direntName = lstatSync(direntPath).isDirectory() ? dirent : parse(dirent).name;
    obj[direntName] = direntPath;
    return obj;
  }, {});
}

const aliases = parseDirAliases(sourcePath);

module.exports = {
  target: 'node',
  externals: [NodeExternals()],
  entry: {
    index: sourcePath
  },
  mode: WEBPACK_MODE === 'production' ? 'production' : 'development',
  output: {
    path: buildPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: aliases
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx']
    }),
    {
      apply: compiler => {
        compiler.hooks.shouldEmit.tap('Plugin', (compilation) => {
          return !compilation.getStats().hasErrors();
        });
      }
    }
  ]
};
