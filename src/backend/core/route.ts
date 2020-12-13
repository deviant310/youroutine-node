import { Express, Request, RequestHandler } from "express";

type Route<Params, Body, Response> = {
  method: keyof Express;
  path: string;
  bodyParser: RequestHandler;
  handler(request: Request<Params, Response, Body>): Promise<Response>;
}

export default Route;