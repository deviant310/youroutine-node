import { randomBytes } from 'crypto';
import { Request, Response } from 'express';

import Http, { Controllers, Controller, ControllersExtractorOptions } from '@jsway/interior/core/http';
import { ModelStatic } from '@jsway/interior/core/model';

import UserModel from 'models/user';
import NoteModel from 'models/note';
import auth from 'http/middleware/auth';
import { json } from 'http/middleware/body-parsers';
import { apiHeaders as headers } from 'http/middleware/headers';

interface AuthRequestBody {
  login: string
  password: string
}

interface ModelRequestParams {
  model: string
  id: number
}

type AuthController = Controller<unknown, AuthRequestBody>;
type ModelController = Controller<ModelRequestParams>;

function getModelByRoute (route: string): ModelStatic | undefined {
  switch (route) {
    case 'notes': return NoteModel;
  }
}

function getAuthControllers (options: ControllersExtractorOptions): Controllers<AuthController> {
  const { routesConfig: routes } = options;
  
  return [
    {
      method: 'post',
      path: routes.auth,
      handler: async ({ session, body }: Request, response: Response) => {
        const { login, password } = body;
        
        const userId = await (new UserModel()).authenticate(login, password);
        if (userId !== 0) {
          session.userId = userId;
          session.accessToken = randomBytes(24).toString('hex');
        }
  
        response.send(userId);
      }
    }
  ];
}

function getModelControllers (options: ControllersExtractorOptions): Controllers<ModelController> {
  const { routesConfig: routes } = options;
  
  return [
    {
      method: 'get',
      path: routes.entityIndex,
      handler: async ({ params }, response: Response) => {
        const { model: route } = params;
  
        const ModelClass = getModelByRoute(route);
        
        if (typeof ModelClass !== 'undefined') {
          const list = await (new ModelClass()).list();
          response.send(list);
        } else {
          response.status(500).send(`No model class presented for route "${String(route)}"`);
        }
      }
    },
    {
      method: 'get',
      path: routes.entityItem,
      handler: async ({ params }, response: Response) => {
        const { model: route, id } = params;
  
        const ModelClass = getModelByRoute(route);
  
        if (typeof ModelClass !== 'undefined') {
          const item = await (new ModelClass()).getById(id);
          response.send(item);
        } else {
          response.status(500).send(`No model class presented for route "${String(route)}"`);
        }
      }
    }
  ];
}

export default [
  Http.setMiddleware(getAuthControllers, headers, json),
  Http.setMiddleware(getModelControllers, headers, json, auth)
];
