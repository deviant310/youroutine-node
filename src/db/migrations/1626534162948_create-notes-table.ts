import { DatabaseFactory } from '@jsway/interior';

const db = new DatabaseFactory();

class CreateNotesTable {
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
  
  async down (): Promise<void> {
  
  }
}

export default CreateNotesTable;
