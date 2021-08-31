import { NextFunction, Request, Response } from 'express';
import { Http } from '@jsway/interior';

export default function auth (request: Request, response: Response, next: NextFunction): void {
  const { session, xhr, url } = request;
  const { userId } = session;
  const routeLogin = Http.getRoute('login');
  const loginPath = routeLogin?.path || '/';
  
  if (typeof userId !== 'undefined') {
    next();
  } else {
    if (xhr) {
      response.status(401).send({ message: 'Unauthorized', redirect: loginPath });
    } else {
      if (url !== loginPath) {
        response.redirect(loginPath);
      } else {
        next();
      }
    }
  }
}
