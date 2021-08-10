import { DB } from '@jsway/interior';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import session from 'express-session';
import connectPostgreSQLSession from 'connect-pg-simple';

const {
  SESSION_DRIVER: sessionDriver = 'database'
}: {
  SESSION_DRIVER?: string;
} = dotenvParse(process.env as Parsed);

export default {
  defaultSessionDriver: sessionDriver,
  sessionDrivers: {
    database (): session.SessionOptions {
      const db = new DB();
      const { driver, host, port, database, user, password } = db.getConnectionConfig();
      
      switch (driver) {
        case 'pgsql': {
          const PostgreSQLSession = connectPostgreSQLSession(session);
  
          return {
            store: new PostgreSQLSession({ conObject: { host, port, database, user, password } }),
            secret: 'session-secret',
            saveUninitialized: true,
            resave: true
          };
        }
      }
    }
  }
};
