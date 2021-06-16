import { resolve } from 'path';
import { readFileSync } from 'fs';

import Http, { Controllers, ControllersExtractorOptions } from '@jsway/interior/core/http';

import auth from 'http/middleware/auth';

function getBaseControllers (options: ControllersExtractorOptions): Controllers {
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

export default Http.setMiddleware(getBaseControllers, auth);
