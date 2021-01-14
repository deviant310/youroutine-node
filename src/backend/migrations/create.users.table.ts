import db from 'core/db';

class CreateUsersTable {
  async up(){
    const { query } = await db();
    
    await query(`
      create table users (
        id bigserial not null constraint users_pkey primary key,
        name varchar(255) not null,
        email varchar(255) not null constraint users_email_unique unique,
        password varchar(255) not null,
        auth_token varchar(100),
        active boolean default true not null
      );
    `);
  }
  
  down(){
  
  }
}

export default CreateUsersTable;