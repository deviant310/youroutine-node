import { NextFunction, Request, Response } from 'express';

export function apiHeaders (request: Request, response: Response, next: NextFunction): void {
  response.set({
    'Access-Control-Allow-Origin': '*'
  });
  
  next();
}
