import { NextFunction, Request, Response } from 'express';
import { Http } from '@foobar/nojo';

export default function auth (request: Request, response: Response, next: NextFunction): void {
  const { session, xhr, url } = request;
  const { userId } = session;
  const loginRoute = Http.getConfig().loginRoute;
  const loginPath = loginRoute && Http.getRoute(loginRoute)?.path;
  const homeRoute = Http.getConfig().homeRoute;
  
  if (userId !== undefined) {
    next();
  } else {
    if (xhr) {
      response.status(401).send({ message: 'Unauthorized', redirect: loginPath });
    } else {
      if (loginPath && url !== loginPath) {
        response.redirect(loginPath);
      } else {
        next();
      }
    }
  }
}
