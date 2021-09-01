import { resolve } from 'path';
import { readFileSync } from 'fs';

import { DB, DBMigration } from '@foobar/nojo';

const db = new DB();

class CreateSessionTable extends DBMigration implements DBMigration {
  async up (): Promise<void> {
    const queryFilePath = resolve('node_modules', 'connect-pg-simple', 'table.sql');
    const queryString = readFileSync(queryFilePath).toString();
    const connection = await db.connection();
    
    await connection.query(queryString);
  }
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async down (): Promise<void> {
  
  }
}

export default CreateSessionTable;
