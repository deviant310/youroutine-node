import { NextFunction, Request, Response } from 'express';

import routes from 'config/routes.json';

declare module 'express-session' {
  interface SessionData {
    userId: number
    accessToken: string
  }
}

export default function auth (request: Request, response: Response, next: NextFunction): void {
  const { login: loginPath } = routes;
  const { session, xhr, url } = request;
  const { userId } = session;
  
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
