import dotenvParse, { Parsed } from "dotenv-parse-variables";

const {
  DB_CONNECTION: dbConnection = 'pgsql',
  DB_HOST: dbHost = 'localhost',
  DB_PORT: dbPort = 5432,
  DB_NAME: dbName = 'postgres',
  DB_USER: dbUser = 'postgres',
  DB_PASSWORD: dbPassword = ''
} : {
  DB_CONNECTION?: string,
  DB_HOST?: string;
  DB_PORT?: number;
  DB_NAME?: string;
  DB_USER?: string;
  DB_PASSWORD?: string;
} = dotenvParse(process.env as Parsed);

const connections = {
  default: {
    driver: dbConnection,
    host: dbHost,
    port: dbPort,
    database: dbName,
    user: dbUser,
    password: dbPassword
  }
};

export default connections;
