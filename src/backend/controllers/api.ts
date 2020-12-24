import { randomBytes } from "crypto";

import express from "express";
import { withMiddleware, Route, Routable } from "core/router/route";

import User from "models/user";
import auth from "middlewares/auth";

interface ModelParams {
  model: string;
  id: number
}

interface AuthBody {
  login: string;
  password: string;
}

type AuthRoute = Route<any, AuthBody>;
type ModelRoute = Route<ModelParams, any>;

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

const modelRoutes: Routable<ModelRoute> = () => ([
  {
    method: 'get',
    path: '/:model',
    response: async ({ params }) => {
      const { model } = params;
      const Model = require(`models/${model}`).default;
      return (new Model).list();
    }
  },
  {
    method: 'get',
    path: '/:model/:id',
    response: async ({ params }) => {
      const { model, id } = params;
      const Model = require(`models/${model}`).default;
      return (new Model).getById(id);
    }
  }
]);

export default [
  withMiddleware(authRoutes, bodyParser),
  withMiddleware(modelRoutes, bodyParser, auth)
];