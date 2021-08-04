import { randomBytes } from 'crypto';
import { Request, Response } from 'express';

import { Http, HttpFactory, Database } from '@jsway/interior';

import auth from 'http/middleware/auth';
import { json } from 'http/middleware/body-parsers';
import { apiHeaders } from 'http/middleware/headers';
import UserModel from 'models/user';
import NoteModel, { NoteScheme } from 'models/note';

interface AuthRequestBody {
  login: string
  password: string
}

interface ModelRequestParams {
  id: number
}

// нужно переделать как в laravel

type AuthController = Http.Controller<unknown, AuthRequestBody>;
type ModelController = Http.Controller<ModelRequestParams>;

const http = new HttpFactory();

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
      path: routes.notes,
      handler: async (request, response: Response) => {
        const list = await (new NoteModel()).list() as Database.QueryResult<NoteScheme>;
        
        response.send(list.rows);
      }
    },
    {
      method: 'get',
      path: routes.note,
      handler: async ({ params }, response: Response) => {
        const { id } = params;
        const list = await (new NoteModel()).getById(id) as Database.QueryResult<NoteScheme>;
        
        response.send(list.rows[0]);
      }
    }
  ];
}

export default [
  http.setMiddleware(getAuthControllers, apiHeaders, json),
  http.setMiddleware(getModelControllers, apiHeaders, json, auth)
];
