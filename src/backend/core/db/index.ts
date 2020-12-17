import {
  Client as PostgreSQLClient,
  QueryResult as PostgreSQLQueryResult,
  QueryResultRow as PostgreSQLQueryResultRow
} from "pg";

import { Driver } from "core/db/driver";

const dbDrivers = require.context('core/db/drivers', true, /\.ts$/);

import connections from "config/db";

const defaultConnection = 'default';

type DBClient = PostgreSQLClient;
type DBQueryResult = PostgreSQLQueryResult | PostgreSQLQueryResultRow;

export default function(connectionName: keyof typeof connections = defaultConnection) : Driver<DBClient, DBQueryResult> {
  const connection = connections[connectionName] || connections[defaultConnection];
  
  const { driver, host, port, database, user, password } = connection;
  
  const DBDriverStatic = dbDrivers(`./${driver}.ts`).default;
  
  return (new DBDriverStatic).init(host, port, database, user, password);
}