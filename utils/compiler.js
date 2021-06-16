const { existsSync } = require('fs');

const { red } = require('chalk');
const webpack = require('webpack');

function checkBuild (buildPath) {
  if (!existsSync(buildPath)) {
    console.log(red('Build not found! Run "npm run build" firstly!')) || process.exit();
  }
}

function build (options = {}) {
  const { webpackConfig: getWebpackConfig, watch } = {
    webpackConfig: undefined,
    watch: false,
    ...options
  };
  
  if (!getWebpackConfig) { console.log(red(`Webpack config is not specified at ${__filename}!`)) || process.exit() }
  
  const webpackConfig = typeof getWebpackConfig === 'function' ? getWebpackConfig.call() : getWebpackConfig;
  
  return new Promise(resolve => {
    const compiler = webpack(webpackConfig);
    const watchOptions = {
      aggregateTimeout: 0
    };
    const callback = (err, stats) => {
      err && (console.log(err.toString()) || process.exit());
      
      console.log(stats.toString({
        colors: true,
        assets: false,
        modules: false
      }));
      
      stats.hasErrors() && process.exit();
  
      resolve(stats);
    };
    
    if (watch) {
      compiler.watch(watchOptions, callback);
    } else {
      compiler.run(callback);
    }
  });
}

module.exports = { build, checkBuild };
