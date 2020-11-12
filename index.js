require('dotenv').config()

const path = require('path');
const { spawn } = require('child_process');
const { existsSync } = require('fs');

const dotenvParse = require('dotenv-parse-variables');

const isProduction = process.env.NODE_ENV === 'production';

const { APP_DEV_INSPECT, APP_DEV_INSPECT_BRK } = dotenvParse(process.env);

const buildPath = path.resolve(process.cwd(), 'build');
const serverPath = path.resolve(process.cwd(), 'app.js');

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
  const nodemonOptions = {
    inspect: APP_DEV_INSPECT,
    breakOnStart: APP_DEV_INSPECT_BRK
  }

  spawn('./node_modules/.bin/nodemon', [
    nodemonOptions.inspect && `--inspect${nodemonOptions.breakOnStart ? '-brk' : ''}=0.0.0.0`,
    serverPath,
    `--watch`,
    buildPath,
  ], {stdio: 'inherit'});
}

const serve = () => {
  spawn('node', [serverPath], {stdio: 'inherit'});
}

if(isProduction){
  checkBuild();
  serve();
} else {
  build().then(watch);
}