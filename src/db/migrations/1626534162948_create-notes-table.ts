import { DB, DBMigration } from '@jsway/interior';

const db = new DB();

class CreateNotesTable extends DBMigration implements DBMigration {
  async up (): Promise<void> {
    const connection = await db.connection();
    
    await connection.query(`
      create table notes (
        id bigserial not null constraint notes_pkey primary key,
        title varchar(255) not null,
        description text
      );
    `);
  }
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async down (): Promise<void> {
  
  }
}

export default CreateNotesTable;
