import express, { Express, Request, Response } from "express";
import Controller from "core/controller";

type ControllerRequestParams<Model, Action> = {
  model: Model;
  action: Action;
}

type ControllerInstance = Controller<object[], object>;
type ControllerRequest = ControllerRequestParams<string, keyof ControllerInstance>;

//const controllers = require.context('controllers', false, /\.ts$/);

function applyRoutes(app: Express) {
  app.post('/api/:model/:action', express.json(), async (request: Request<ControllerRequest>, response: Response) => {
    const params = request.params;
    const { model, action } = params;
    const controller: ControllerInstance = new Controller;
    const controllerAction = controller[ action ];
    const message = await controllerAction(model, request.body);
    
    response.send(message);
  });
}

export { applyRoutes };