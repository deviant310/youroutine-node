import { randomBytes } from 'crypto';
import { Request, Response } from 'express';

import { Http, HttpFactory, Model, ModelFactory, Database } from '@jsway/interior';

import auth from 'http/middleware/auth';
import { json } from 'http/middleware/body-parsers';
import { apiHeaders as headers } from 'http/middleware/headers';
import UserModel from 'models/user';
import NoteModel from 'models/note';

interface AuthRequestBody {
  login: string
  password: string
}

interface ModelRequestParams {
  model: string
  id: number
}

type AuthController = Http.Controller<unknown, AuthRequestBody>;
type ModelController = Http.Controller<ModelRequestParams>;
type Models = UserModel | NoteModel;

function getModelByRoute (route: string): Model.ModelStatic<Models> | undefined {
  switch (route) {
    case 'users': return UserModel;
    case 'notes': return NoteModel;
  }
}

function getAuthControllers (options: Http.ControllersExtractorOptions): Http.Controllers<AuthController> {
  const { routesConfig: routes } = options;
  
  return [
    {
      method: 'post',
      path: routes.auth,
      handler: async ({ session, body }: Request, response: Response) => {
        const { login, password } = body;
        
        await (new UserModel())
          .authenticate(login, password)
          .then(userId => {
            const accessToken = randomBytes(24).toString('hex');
            
            session.userId = userId;
            session.accessToken = accessToken;
            
            response.send({ accessToken });
          })
          .catch(err => {
            response.status(401).send({ message: 'Unauthenticated', reason: err.message });
          });
      }
    }
  ];
}

function getModelControllers (options: Http.ControllersExtractorOptions): Http.Controllers<ModelController> {
  const { routesConfig: routes } = options;
  
  return [
    {
      method: 'get',
      path: routes.entityIndex,
      handler: async ({ params }, response: Response) => {
        const { model: route } = params;
        
        const ModelFactoryClass = getModelByRoute(route);
        
        if (typeof ModelFactoryClass !== 'undefined') {
          const list = await (new ModelFactoryClass() as ModelFactory).list() as Database.QueryResult<unknown>;
          response.send(list.rows);
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
  HttpFactory.setMiddleware(getAuthControllers, headers, json),
  HttpFactory.setMiddleware(getModelControllers, headers, json, auth)
];
