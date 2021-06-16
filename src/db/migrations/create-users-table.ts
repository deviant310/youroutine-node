import Database from '@jsway/interior/core/db';

const DB = new Database();

class CreateUsersTable {
  async up (): Promise<void> {
    const { query } = await DB.connection();
    
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
  
  async down (): Promise<void> {
  
  }
}

export default CreateUsersTable;
