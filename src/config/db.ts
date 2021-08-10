import { DBDriver } from '@jsway/interior';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';

const {
  DB_CONNECTION: connection = 'pgsql',
  DB_HOST: host = 'localhost',
  DB_PORT: port = 5432,
  DB_NAME: database = 'postgres',
  DB_USER: user = 'postgres',
  DB_PASSWORD: password = ''
}: {
  DB_CONNECTION?: string;
  DB_HOST?: string;
  DB_PORT?: number;
  DB_NAME?: string;
  DB_USER?: string;
  DB_PASSWORD?: string;
} = dotenvParse(process.env as Parsed);

export default {
  defaultConnection: connection,
  connections: {
    pgsql: {
      driver: 'pgsql' as DBDriver.Name,
      host,
      port,
      database,
      user,
      password
    }
  }
};
