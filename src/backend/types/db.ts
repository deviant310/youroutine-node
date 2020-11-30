import {Client as PostgresClient, ClientConfig} from "pg";
import {Controller} from "./controller";

namespace DB {
  export type DBConstructor = {
    new() : DBConnection;
  }
  
  export type DBConnection = {
    init(): void
    query(queryString: string): void;
  }
}

export = DB;