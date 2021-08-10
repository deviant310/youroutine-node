import { resolve } from 'path';
import { readFileSync } from 'fs';

import { DB, DBMigration } from '@jsway/interior';

const db = new DB();

class CreateSessionTable extends DBMigration implements DBMigration.Instance {
  async up (): Promise<void> {
    const queryFilePath = resolve('node_modules', 'connect-pg-simple', 'table.sql');
    const queryString = readFileSync(queryFilePath).toString();
    const connection = await db.connection();
    
    await connection.query(queryString);
  }
  
  async down (): Promise<void> {
  
  }
}

export default CreateSessionTable;
