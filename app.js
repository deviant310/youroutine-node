require('dotenv').config();

const { resolve } = require('path');
const express = require('express');
const minimist = require('minimist');
const dotenvParse = require('dotenv-parse-variables');
const chalk = require('chalk');

const headers = {
  "Access-Control-Allow-Origin": "*"
}

const { IS_COMMAND, APP_HOST, APP_PORT } = {
  ...{
    IS_COMMAND: false,
    APP_PORT: 3000,
    APP_HOST: 'localhost'
  },
  ...dotenvParse(process.env)
};

const rootPath = resolve(process.cwd(), 'build');
const publicPath = resolve(rootPath, 'public');

const app = express();
const { bootstrap, runCommand } = require(rootPath);

(async () => {
  if(IS_COMMAND){
    const { _: commands, ...options } = minimist(process.argv.slice(2));
    const [ command ] = commands;
    const exitCode = await runCommand(command, options)
        .catch(e => console.error(chalk.red(e.message)));
    process.exit(exitCode);
  } else {
    app.use(express.static(publicPath, {
      setHeaders: res => res.set(headers)
    }));
  
    await bootstrap(app);
  
    app.get('*', (req, res) => {
      res.sendFile(resolve(publicPath, 'index.html'))
    });
  
    const listener = app.listen(APP_PORT, APP_HOST, () => {
      let { address, port } = listener.address();
      console.log(`App is running on http://${address}:${port}\n`);
    });
  }
})();