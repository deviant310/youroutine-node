import express from "express";

import Route from "core/route";

interface Params {
  model: string;
  id: number
}

const routes: Route<Params, any, any>[] = [
  {
    method: 'get',
    path: '/:model',
    bodyParser: express.json(),
    handler: async ({ params }) => {
      const { model } = params;
      const Model = require(`models/${model}`).default;
      return (new Model).list();
    }
  },
  {
    method: 'get',
    path: '/:model/:id',
    bodyParser: express.json(),
    handler: async ({ params }) => {
      const { model, id } = params;
      const Model = require(`models/${model}`).default;
      return (new Model).getById(id);
    }
  }
];

export default routes;