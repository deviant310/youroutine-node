import { DB } from '@jsway/interior';

const db = new DB();

class CreateUsersTable {
  async up (): Promise<void> {
    const connection = await db.connection();
    
    await connection.query(`
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
