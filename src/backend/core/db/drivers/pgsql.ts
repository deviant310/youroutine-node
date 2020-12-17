import { Client, QueryResult, QueryResultRow } from "pg";
import waitPort from 'wait-port';
import isReachable from 'is-reachable';

import { Driver } from 'core/db/driver';

class PostgreSQL implements Driver<Client, QueryResult | QueryResultRow> {
  private static _client: Client;
  
  get connection(){
    return PostgreSQL._client;
  }
  
  async init(host: string, port: number, database: string, user: string, password: string){
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
  
  async query(queryText: string, values?: any[]){
    return this.connection.query(queryText, values);
  }
}

export default PostgreSQL;
