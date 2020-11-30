import dotenvParse, { Parsed } from 'dotenv-parse-variables';

import { DBConstructor } from 'types/db';

const {
  DB_DRIVER: dbDriver = 'pgsql',
} : {
  DB_DRIVER?: string;
} = dotenvParse(process.env as Parsed);

const dbDrivers = require.context('db', false, /(?<!index)\.ts$/);

const DB = async () => {
  const DBClass: DBConstructor = dbDrivers(`./${dbDriver}.ts`).default;
  const dbInstance = new DBClass;
  await dbInstance.init();
  return dbInstance;
}

export default DB;
