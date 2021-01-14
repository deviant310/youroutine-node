import db from 'core/db';

class CreateNotesTable {
  async up(){
    const { query } = await db();
    
    await query(`
      create table notes (
        id bigserial not null constraint notes_pkey primary key,
        title varchar(255) not null,
        description text
      );
    `);
  }
  
  async down(){
  
  }
}

export default CreateNotesTable;