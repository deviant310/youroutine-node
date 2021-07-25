import Database from '@jsway/interior/core/db';

const DB = new Database();

class CreateNotesTable {
  async up (): Promise<void> {
    const connection = await DB.connection();
    
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
