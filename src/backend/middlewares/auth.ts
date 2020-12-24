import { Request, Response, NextFunction } from "express";

declare module 'express-session' {
  interface SessionData {
    userId: number;
    accessToken: string;
  }
}

const auth = (request: Request, response: Response, next: NextFunction) => {
  const { session } = request;
  const { userId } = session;
  
  if(userId){
    next();
  } else {
    response.status(302).send({redirect: '/login'});
  }
};

export default auth;