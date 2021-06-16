import dotenvParse, { Parsed } from 'dotenv-parse-variables';

import { DriverName } from '@jsway/interior/core/db';

const {
  DB_HOST: dbHost = 'localhost',
  DB_PORT: dbPort = 5432,
  DB_NAME: dbName = 'postgres',
  DB_USER: dbUser = 'postgres',
  DB_PASSWORD: dbPassword = ''
}: {
  DB_HOST?: string
  DB_PORT?: number
  DB_NAME?: string
  DB_USER?: string
  DB_PASSWORD?: string
} = dotenvParse(process.env as Parsed);

export default {
  connections: {
    default: {
      driver: DriverName.PostgreSQL,
      host: dbHost,
      port: dbPort,
      database: dbName,
      user: dbUser,
      password: dbPassword
    }
  }
};
