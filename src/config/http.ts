import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import session from 'express-session';
import connectPostgreSQLSession from 'connect-pg-simple';

const {
  DB_HOST: host = 'localhost',
  DB_PORT: port = 5432,
  DB_NAME: database = 'postgres',
  DB_USER: user = 'postgres',
  DB_PASSWORD: password = ''
}: {
  DB_HOST?: string
  DB_PORT?: number
  DB_NAME?: string
  DB_USER?: string
  DB_PASSWORD?: string
} = dotenvParse(process.env as Parsed);

export default {
  defaultSessionDriver: 'db',
  sessionDrivers: {
    db (): session.SessionOptions {
      const PostgreSQLSession = connectPostgreSQLSession(session);
  
      return {
        store: new PostgreSQLSession({
          conObject: { host, port, database, user, password }
        }),
        secret: 'session-secret',
        saveUninitialized: true,
        resave: true
      };
    }
  }
};
