import { Client } from 'pg';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';
import waitPort from 'wait-port';

import { DBConnection } from 'types/db';

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

class PostgreSQL implements DBConnection {
  private static _client: Client;
  
  get connection(){
    return PostgreSQL._client;
  }
  
  async init(){
    if(!PostgreSQL._client) {
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
  
  async query(queryText: string){
    return this.connection.query(queryText);
  }
}

export default PostgreSQL;
