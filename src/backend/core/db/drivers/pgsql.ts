import { Client } from "pg";
import waitPort from 'wait-port';
import isReachable from 'is-reachable';

import { DB } from '../../';

class PostgreSQL implements DB.Driver {
  private static _client: DB.Client;
  
  get connection(){
    return PostgreSQL._client;
  }
  
  async init(host: string, port: number, database: string, user: string, password: string) {
    if(!PostgreSQL._client) {
      const dbIsReachable = await isReachable(`${host}:${port}`);
      if(!dbIsReachable)
        await waitPort({ host, port, timeout: 15000 });
      const client = new Client({ host, port, database, user, password });
      await client.connect();
      PostgreSQL._client = client;
    }
    
    return this;
  }
  
  async query<T>(queryText: string, values?: any[]): Promise<DB.QueryResult<T>> {
    return this.connection.query(queryText, values);
  }
}

const PostgreSQLStatic: DB.DriverStatic = PostgreSQL;

export default PostgreSQL;
