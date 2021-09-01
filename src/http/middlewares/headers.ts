import { NextFunction, Request, Response } from 'express';

export default function headers (request: Request, response: Response, next: NextFunction): void {
  response.set({
    'Content-Security-Policy': 'default-src \'self\''
  });
  
  next();
}

export function apiHeaders (request: Request, response: Response, next: NextFunction): void {
  response.set({
    'Access-Control-Allow-Origin': '*'
  });
  
  next();
}
