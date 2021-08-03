import { resolve } from 'path';
import { readFileSync } from 'fs';

import { DatabaseFactory } from '@jsway/interior';
import dotenvParse, { Parsed } from 'dotenv-parse-variables';

const {
  NODE_MODULES_PATH = './node_modules'
}: {
  NODE_MODULES_PATH?: string
} = dotenvParse(process.env as Parsed);

const db = new DatabaseFactory();

// const { db, getConnection } = DBDefiner;
// const { driver } = getConnection();

class CreateSessionTable {
  async up (): Promise<void> {
    const queryFilePath = resolve(NODE_MODULES_PATH, 'connect-pg-simple', 'table.sql');
    const queryString = readFileSync(queryFilePath).toString();
    const connection = await db.connection();
    
    await connection.query(queryString);
  }
  
  async down (): Promise<void> {
  
  }
}

export default CreateSessionTable;
