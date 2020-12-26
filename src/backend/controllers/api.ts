import { resolve, parse } from "path";
import { randomBytes } from "crypto";

import express from "express";
import { withMiddleware, Route, Routable } from "core/router/route";

import User from "models/user";
import auth from "middlewares/auth";

interface ModelRequestParams {
  model: string;
  id: number
}

interface AuthRequestBody {
  login: string;
  password: string;
}

type AuthRoute = Route<any, AuthRequestBody>;
type ModelRoute = Route<ModelRequestParams>;

const bodyParser = express.json();

const authRoutes: Routable<AuthRoute> = () => ([
  {
    method: 'post',
    path: '/login',
    response: async ({ session, body }) => {
      const { login, password } = body;
      
      const userId = await (new User).authenticate(login, password);
      if(userId) {
        session.userId = userId;
        session.accessToken = randomBytes(24).toString('hex');
      }
      return userId;
    }
  },
]);

const modelRoutes: Routable<ModelRoute> = () => {
  const modelsContext = require.context('models', false, /\.ts$/);
  const models = modelsContext
    .keys()
    .reduce((obj: { [ key: string ]: any }, key) => {
      const module = modelsContext(key).default;
      const { routeAlias } = module || {}
      const newKey = routeAlias || parse(key).name;
      obj[newKey] = module;
      return obj;
    }, {});
  const modelsPath = `/:model(${Object.keys(models).join('|')})`;
  
  return [
    {
      method: 'get',
      path: resolve(modelsPath),
      response: async ({ params }) => {
        const { model } = params;
        const Model = models[model];
        return (new Model).list();
      }
    },
    {
      method: 'get',
      path: resolve(modelsPath, ':id'),
      response: async ({ params }) => {
        const { model, id } = params;
        const Model = models[model];
        return (new Model).getById(id);
      }
    }
  ];
};

export default [
  withMiddleware(authRoutes, bodyParser),
  withMiddleware(modelRoutes, bodyParser, auth)
];