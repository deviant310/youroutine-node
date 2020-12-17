import express from "express";

import Route from "core/route";
import User from "models/user";

interface Params {
  model: string;
  id: number
}

interface Body {
  login: string;
  password: string;
}

const routes: Route<Params, Body, any>[] = [
  {
    method: 'post',
    path: '/login',
    bodyParser: express.json(),
    response: async ({ body }) => {
      const { login, password } = body;
      return (new User).authenticate(login, password);
    }
  },
  {
    method: 'get',
    path: '/auth',
    bodyParser: express.json(),
    response: async () => {
      return (new User).authorize();
    }
  },
  {
    method: 'get',
    path: '/:model',
    bodyParser: express.json(),
    response: async ({ params }) => {
      const { model } = params;
      const Model = require(`models/${model}`).default;
      return (new Model).list();
    }
  },
  {
    method: 'get',
    path: '/:model/:id',
    bodyParser: express.json(),
    response: async ({ params }) => {
      const { model, id } = params;
      const Model = require(`models/${model}`).default;
      return (new Model).getById(id);
    }
  }
];

export default routes;