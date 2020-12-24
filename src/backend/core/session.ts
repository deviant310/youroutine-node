import { Express } from "express";
import session from "express-session";

export default function(app: Express){
  app.use(session({secret: 'session-secret'}));
}