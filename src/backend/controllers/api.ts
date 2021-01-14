import { randomBytes } from "crypto";

import { Routable, Route } from "core/router";
import { withMiddleware, routePath } from "core/router/route";
import Model from "core/db/model";

import User from "models/user";
import Auth from "middlewares/auth";
import { json } from "middlewares/body.parsers";

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

const { getContextModelByRouteName } = Model;

const authRoutes: Routable<AuthRoute> = () => ([
  {
    method: 'post',
    path: routePath('auth'),
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
  return [
    {
      method: 'get',
      path: routePath('model'),
      response: async ({ params }) => {
        const { model: modelRouteName } = params;
        const Model = getContextModelByRouteName(modelRouteName);
        return (new Model).list();
      }
    },
    {
      method: 'get',
      path: routePath('modelItem'),
      response: async ({ params }) => {
        const { model: modelRouteName, id } = params;
        const Model = getContextModelByRouteName(modelRouteName);
        return (new Model).getById(id);
      }
    }
  ];
};

export default [
  withMiddleware(authRoutes, json),
  withMiddleware(modelRoutes, json, Auth)
];
