import {
  Client as PostgreSQLClient,
  QueryResult as PostgreSQLQueryResult
} from "pg";

export declare namespace DB {
  type Client = PostgreSQLClient;
  
  type QueryResult<T> = PostgreSQLQueryResult<T>;
  
  type DriverStatic = {
    new(...args: any): Driver;
  }
  
  type Driver = {
    connection: Client;
    init(host: string, port: number, database: string, user: string, password: string): Promise<Driver>;
    query(queryString: string, values?: any[]): Promise<QueryResult<any>>;
  };
  
  export { Client, QueryResult, DriverStatic, Driver };
}

export declare namespace Module {
  type Context<T> = {
  
  }
}
