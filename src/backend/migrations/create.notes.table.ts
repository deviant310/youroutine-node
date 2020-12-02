import DB from 'db';

class CreateNotesTable {
  async up(){
    const db = await DB();
    
    return db.query(`
      create table notes (
        id bigserial not null constraint notes_pkey primary key,
        name varchar(255) not null,
        description text
      );
    `);
  }
  
  down(){
  
  }
}

export default CreateNotesTable;