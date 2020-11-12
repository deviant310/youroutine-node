const Path = require('path');

const Express = require('express');

const dotenvParse = require('dotenv-parse-variables');

const headers = {
  "Access-Control-Allow-Origin": "*"
}

const { APP_HOST, APP_PORT } = dotenvParse(process.env);

const rootPath = Path.resolve(process.cwd(), 'build');
const publicPath = Path.resolve(rootPath, 'public');

const app = Express();
const middleware = require(rootPath);

app.use(Express.static(publicPath, {
  setHeaders: res => res.set(headers)
}));

middleware(app);

app.get('*', (req, res) => {
  res.sendFile(Path.resolve(publicPath, 'index.html'))
});

const listener = app.listen(APP_PORT || 3000, APP_HOST || 'localhost', () => {
  let { address, port } = listener.address();
  console.log(`App is running on http://${address}:${port}\n`);
});