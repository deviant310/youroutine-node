import { NextFunction, Request, Response } from "express";

declare module 'express-session' {
  interface SessionData {
    userId: number;
    accessToken: string;
  }
}

const auth = (request: Request, response: Response, next: NextFunction) => {
  const { session, xhr } = request;
  const { userId } = session;
  
  if(userId){
    next();
  } else {
    if(xhr){
      response.status(302).send({redirect: '/login'});
    } else {
      response.redirect('/login');
    }
    
  }
};

export default auth;