import DB from 'core/db';

async function up(){
  const db = await DB();
  
  return db.query(`
    create table notes (
      id bigserial not null constraint notes_pkey primary key,
      title varchar(255) not null,
      description text
    );
  `);
}

async function down(){

}

export { up, down };