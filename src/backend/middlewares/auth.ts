import { NextFunction, Request, Response } from "express";

import routes from "config/routes";

declare module 'express-session' {
  interface SessionData {
    userId: number;
    accessToken: string;
  }
}

const Auth = (request: Request, response: Response, next: NextFunction) => {
  const { signIn: signInPath } = routes;
  const { session, xhr, url } = request;
  const { userId } = session;

  if(userId){
    next();
  } else {
    if(xhr){
      response.status(302).send({redirect: signInPath});
    } else {
      if(url !== signInPath)
        response.redirect(signInPath);
      else
        next();
    }
  }
};

export default Auth;