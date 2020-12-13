import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import { Client, QueryResult, QueryResultRow } from "pg";
import waitPort from 'wait-port';
import isReachable from 'is-reachable';

import { Connection } from 'core/db/connection';

const {
  DB_HOST: dbHost = 'localhost',
  DB_PORT: dbPort = 5432,
  DB_NAME: dbName = 'postgres',
  DB_USER: dbUser = 'postgres',
  DB_PASSWORD: dbPassword = ''
} : {
  DB_HOST?: string;
  DB_PORT?: number;
  DB_NAME?: string;
  DB_USER?: string;
  DB_PASSWORD?: string;
} = dotenvParse(process.env as Parsed);

class PostgreSQL implements Connection<Client, QueryResult | QueryResultRow> {
  private static _client: Client;
  
  get connection(){
    return PostgreSQL._client;
  }
  
  async init(){
    if(!PostgreSQL._client) {
      const dbIsReachable = await isReachable(`${dbHost}:${dbPort}`);
      if(!dbIsReachable)
        await waitPort({ host: dbHost, port: dbPort, timeout: 15000 });
      const client = new Client({
        user: dbUser,
        host: dbHost,
        database: dbName,
        password: dbPassword,
        port: dbPort,
      });
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
