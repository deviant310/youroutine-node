import dotenvParse, { Parsed } from 'dotenv-parse-variables';

import { DBConstructor } from 'types/db';

const {
  DB_DRIVER: dbDriver = 'pgsql',
} : {
  DB_DRIVER?: string;
} = dotenvParse(process.env as Parsed);

const dbDrivers = require.context('db', false, /(?<!index)\.ts$/);

const dbDefiner = () => {
  const DBClass: DBConstructor = dbDrivers(`./${dbDriver}.ts`).default;
  return (new DBClass).init();
}

export default dbDefiner;
