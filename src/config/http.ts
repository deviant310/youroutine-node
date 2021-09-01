import { resolve } from 'path';

import { DB } from '@jsway/interior';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import session from 'express-session';
import connectPostgreSQLSession from 'connect-pg-simple';

declare module 'express-session' {
  interface SessionData {
    userId: number;
    accessToken: string;
  }
}

const {
  APP_PUBLIC_DIR = './build/public',
  APP_HOST = 'localhost',
  APP_PORT = 80,
  SESSION_DRIVER: sessionDriver = 'database'
}: {
  APP_PUBLIC_DIR?: string;
  APP_HOST?: string;
  APP_PORT?: number;
  SESSION_DRIVER?: string;
} = dotenvParse(process.env as Parsed);

export default {
  host: APP_HOST,
  port: APP_PORT,
  staticPath: resolve(APP_PUBLIC_DIR),
  loginRoute: 'login',
  headers: {
    'Content-Security-Policy': 'default-src \'self\''
  },
  sessionDriver,
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
