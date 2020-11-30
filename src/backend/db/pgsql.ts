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
  private static client: Client;
  
  async init(){
    //await waitPort({ host: dbHost, port: dbPort, timeout: 15000 });
    
    await this.client.connect();
  }
  
  async query(queryText: string){
    return await this.client.query(queryText);
  }
  
  private get client() : Client {
    debugger;
    if(!PostgreSQL.client)
      PostgreSQL.client = new Client({
        user: dbUser,
        host: dbHost,
        database: dbName,
        password: dbPassword,
        port: dbPort,
      });
    return PostgreSQL.client;
  }
}

export default PostgreSQL;
