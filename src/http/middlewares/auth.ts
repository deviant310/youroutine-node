import { NextFunction, Request, Response } from 'express';
import { Http } from '@jsway/interior';

export default function auth (request: Request, response: Response, next: NextFunction): void {
  const { session, xhr, url } = request;
  const { userId } = session;
  const loginRoute = Http.getConfig().loginRoute;
  const loginPath = loginRoute && Http.getRoute(loginRoute)?.path;
  const homeRoute = Http.getConfig().homeRoute;
  const homePath = homeRoute && Http.getRoute(homeRoute)?.path;
  
  if (typeof userId !== 'undefined') {
    next();
  } else {
    if (xhr) {
      if (typeof userId === 'undefined') {
        response.status(401).send({ message: 'Unauthorized', redirect: loginPath });
      } else {
        next();
      }
    } else {
      if (typeof userId === 'undefined') {
        if (loginPath && url !== loginPath) {
          response.redirect(loginPath);
        } else {
          next();
        }
      } else {
        if (homePath && url === loginPath) {
          response.redirect(homePath);
        } else {
          next();
        }
      }
    }
  }
}
