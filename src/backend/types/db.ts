import {
  Client as PostgreSQLClient,
  QueryResult as PostgresSQLQueryResult,
  QueryResultRow as PostgresSQLQueryResultRow
} from "pg";

namespace DB {
  export type DBConstructor = {
    new() : DBConnection;
  };
  
  export type QueryResult<Result> = PostgresSQLQueryResultRow | PostgresSQLQueryResult<Result>;
  
  export type DBConnection = {
    connection: PostgreSQLClient;
    init(): Promise<DBConnection>;
    query(queryString: string, values?: any[]): QueryResult<any>;
  };
}

export = DB;