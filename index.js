require('dotenv').config()

const path = require('path');
const { spawn } = require('child_process');
const { existsSync } = require('fs');

const dotenvParse = require('dotenv-parse-variables');

const isDevelopment = process.env.NODE_ENV !== 'production';

const { APP_DEV_INSPECT, APP_DEV_INSPECT_BRK } = dotenvParse(process.env);

const envPath = path.resolve(process.cwd(), '.env');
const buildPath = path.resolve(process.cwd(), 'build');
const serverPath = path.resolve(process.cwd(), 'app.js');

const checkEnv = () => {
  if (!existsSync(envPath))
    console.error('\x1b[31m%s\x1b[0m', '".env" file not found! Make it from ".env.example"!') || process.exit();
  
  const requiredEnvVariables = ['APP_PORT'];
  
  for(let key of requiredEnvVariables){
    if(typeof(process.env[key]) === 'undefined')
      console.error('\x1b[31m%s\x1b[0m', `Missing environment key "${key}"!`) || process.exit();
  }
}

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
      
      resolve(this);
    });
  });
}

const watch = () => {
  const options = {
    inspect: APP_DEV_INSPECT,
    breakOnStart: APP_DEV_INSPECT_BRK
  }
  
  spawn('./node_modules/.bin/nodemon', [
    options.inspect && `--inspect${options.breakOnStart ? '-brk' : ''}=0.0.0.0`,
    serverPath,
    `--watch`,
    serverPath,
    `--watch`,
    buildPath,
  ], {
    stdio: 'inherit',
  });
}

const serve = () => {
  spawn('node', [serverPath], {stdio: 'inherit'});
}

checkEnv();

if(isDevelopment){
  build().then(() => watch());
} else {
  checkBuild();
  serve();
}