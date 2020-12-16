require('dotenv').config();

const path = require('path');
const { exec } = require('child_process');
const { existsSync } = require('fs');
const dotenvParse = require('dotenv-parse-variables');

const {
  NODE_ENV: nodeEnv,
  IS_COMMAND: isCommand,
  APP_DEV_INSPECT: appDevInspect,
  APP_DEV_INSPECT_BRK: appDevInspectBrk
} = {
  ...{
    NODE_ENV: 'development',
    IS_COMMAND: false,
    APP_DEV_INSPECT: false,
    APP_DEV_INSPECT_BRK: false
  },
  ...dotenvParse(process.env)
}

const args = process.argv.slice(2);
const isProduction = nodeEnv === 'production';

const buildPath = path.resolve(process.cwd(), 'build');
const entryPath = path.resolve(process.cwd(), 'app.js');

const checkBuild = () => {
  if (!existsSync(buildPath))
    console.error('\x1b[31m%s\x1b[0m', 'Build not found! Run "npm run build" firstly!') || process.exit();
}

const build = () => {
  return new Promise(resolve => {
    const webpack = require('webpack');
    const webpackConfig = require(path.resolve(process.cwd(), 'webpack.config.js'))();
    const compiler = webpack(webpackConfig);
    
    compiler.watch({aggregateTimeout: 0}, (err, stats) => {
      err && (console.log(err) || process.exit());
      
      console.log(stats.toString({
        colors: true,
        assets: false,
        modules: false
      }));
      
      resolve();
    });
  });
}

const watch = () => {
  const options = {
    inspect: appDevInspect,
    breakOnStart: appDevInspectBrk
  }

  const watcher = exec([
    './node_modules/.bin/nodemon',
    options.inspect && `--inspect${options.breakOnStart ? '-brk' : ''}=0.0.0.0:9229`,
    entryPath,
    `--watch`,
    buildPath
  ].filter(Boolean).concat(args).join(' '));
  
  watcher.stdout.pipe(process.stdout);
}

const serveCommand = () => {
  const options = {
    inspect: appDevInspect,
    breakOnStart: appDevInspectBrk
  }
  
  const command = exec([
    'node',
    options.inspect && `--inspect${options.breakOnStart ? '-brk' : ''}=0.0.0.0:9222`,
    entryPath
  ].filter(Boolean).concat(args).join(' '));
  
  command.stdout.pipe(process.stdout);
}

const serve = () => {
  const server = exec([ 'node', entryPath ].filter(Boolean).concat(args).join(' '));
  server.stdout.pipe(process.stdout);
}

(async () => {
  if(isProduction || isCommand)
    checkBuild();
  else
    await build();
  
  if(isCommand){
    serveCommand();
  } else {
    isProduction ? serve() : watch();
  }
})();