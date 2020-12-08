const Path = require('path');
const Express = require('express');
const Minimist = require('minimist');
const dotenvParse = require('dotenv-parse-variables');

const headers = {
  "Access-Control-Allow-Origin": "*"
}

const { COMMAND, APP_HOST, APP_PORT } = {
  ...{
    COMMAND: false,
    APP_PORT: 3000,
    APP_HOST: 'localhost'
  },
  ...dotenvParse(process.env)
};

const rootPath = Path.resolve(process.cwd(), 'build');
const publicPath = Path.resolve(rootPath, 'public');

const app = Express();
const { bootstrap, runCommand } = require(rootPath);

(async () => {
  if(COMMAND){
    const { _: commands, ...options } = Minimist(process.argv.slice(2));
    const [ command ] = commands;
    await runCommand(command, options);
  } else {
    app.use(Express.static(publicPath, {
      setHeaders: res => res.set(headers)
    }));
  
    await bootstrap(app);
  
    app.get('*', (req, res) => {
      res.sendFile(Path.resolve(publicPath, 'index.html'))
    });
  
    const listener = app.listen(APP_PORT, APP_HOST, () => {
      let { address, port } = listener.address();
      console.log(`App is running on http://${address}:${port}\n`);
    });
  }
})();