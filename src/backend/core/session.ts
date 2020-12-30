import { Express } from "express";
import session from "express-session";
import connectPostgreSQLSession from "connect-pg-simple";

const PostgreSQLSession = connectPostgreSQLSession(session);

export default function(app: Express){
  app.use(session({
    store: new PostgreSQLSession,
    secret: 'session-secret'
  }));
}
