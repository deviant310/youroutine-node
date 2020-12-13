import dotenvParse, { Parsed } from "dotenv-parse-variables";

const {
  DB_DRIVER: dbDriver = 'pgsql',
} : {
  DB_DRIVER?: string;
} = dotenvParse(process.env as Parsed);

const dbDrivers = require.context('core/db/drivers', true, /\.ts$/);

export default function() {
  const DBClass = dbDrivers(`./${dbDriver}.ts`).default;
  return (new DBClass).init();
}