import { resolve } from 'path';
import { readFileSync } from 'fs';

import Database from '@jsway/interior/core/db';

declare const NODE_MODULES_PATH: string;

const DB = new Database();

// const { db, getConnection } = DBDefiner;
// const { driver } = getConnection();

class CreateSessionTable {
  async up (): Promise<void> {
    const queryFilePath = resolve(NODE_MODULES_PATH, 'connect-pg-simple', 'table.sql');
    const queryString = readFileSync(queryFilePath).toString();
    const { query } = await DB.connection();
    
    await query(queryString);
  }
  
  async down (): Promise<void> {
  
  }
}

export default CreateSessionTable;
