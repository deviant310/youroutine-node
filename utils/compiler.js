const webpack = require('webpack');

const getWebpackConfig = require('../webpack.config');

async function compile ({ watch } = {
  watch: false
}) {
  const webpackConfig = typeof getWebpackConfig === 'function' ? getWebpackConfig.call() : getWebpackConfig;

  return new Promise((resolve, reject) => {
    let firstCompiling = true;

    const compiler = webpack(webpackConfig);
    const watchOptions = {
      aggregateTimeout: 0
    };
    const callback = (err, stats) => {
      watch && !firstCompiling && console.clear();

      err && (console.log(err.toString()) || process.exit());

      console.log(stats.toString({
        colors: true,
        hash: false,
        assets: false,
        modules: false
      }));

      stats.hasErrors() && reject(new Error());

      resolve(stats);

      firstCompiling = false;
    };

    if (watch) {
      compiler.watch(watchOptions, callback);
    } else {
      compiler.run(callback);
    }
  });
}

module.exports = compile;
