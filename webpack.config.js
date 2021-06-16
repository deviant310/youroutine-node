const { resolve, parse } = require('path');
const { readdirSync, lstatSync } = require('fs');

const NodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

const { buildDir, sourceDir, storageDir } = require('./config.json');

const { WEBPACK_MODE } = process.env;

const sourcePath = resolve(sourceDir);
const buildPath = resolve(buildDir);
const storagePath = resolve(storageDir);
const nodeModulesPath = resolve('node_modules');

function parseDirAliases (path) {
  return readdirSync(path).reduce((obj, dirent) => {
    const direntPath = resolve(path, dirent);
    const direntName = lstatSync(direntPath).isDirectory() ? dirent : parse(dirent).name;
    obj[direntName] = direntPath;
    return obj;
  }, {});
}

function buildGlobalsFromAliases (aliases) {
  return Object.entries(aliases).reduce((obj, [key, value]) => {
    obj[`${key.toUpperCase()}_PATH`] = `'${value}'`;
    return obj;
  }, {});
}

const aliases = {
  ...parseDirAliases(sourcePath),
  appConfig: resolve('config.json')
};

module.exports = {
  target: 'node',
  externals: [NodeExternals()],
  entry: {
    index: sourcePath
  },
  mode: WEBPACK_MODE === 'production' ? 'production' : 'development',
  output: {
    path: buildPath,
    libraryTarget: 'umd'
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
    new DefinePlugin(buildGlobalsFromAliases({
      ...aliases,
      ...{
        storage: storagePath,
        node_modules: nodeModulesPath
      }
    }))
  ]
};
