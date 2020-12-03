import { Client as PostgreSQLClient } from "pg";

namespace DB {
  export type DBConstructor = {
    new() : DBConnection;
  }
  
  export type DBConnection = {
    connection: PostgreSQLClient;
    init(): Promise<DBConnection>;
    query(queryString: string): void;
  }
}

export = DB;