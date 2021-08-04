import { resolve } from 'path';
import { readFileSync } from 'fs';

import { Http, HttpFactory } from '@jsway/interior';

import auth from 'http/middleware/auth';

const http = new HttpFactory();

function getBaseControllers (options: Http.ControllersExtractorOptions): Http.Controllers {
  const { routesConfig: routes, publicPath } = options;
  
  const handler = async (): Promise<Buffer> => {
    return readFileSync(resolve(publicPath, 'index.html'));
  };
  
  return [
    {
      method: 'get',
      path: routes.signIn,
      handler
    },
    {
      method: 'get',
      path: routes.entityIndex,
      handler
    },
    {
      method: 'get',
      path: routes.entityItem,
      handler
    }
  ];
}

export default http.setMiddleware(getBaseControllers, auth);
