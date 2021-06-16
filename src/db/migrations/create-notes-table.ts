import Database from '@jsway/interior/core/db';

const DB = new Database();

class CreateNotesTable {
  async up (): Promise<void> {
    const { query } = await DB.connection();
    
    await query(`
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
