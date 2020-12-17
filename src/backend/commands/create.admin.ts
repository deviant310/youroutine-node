import DB from 'core/db';

import { hash } from "bcrypt";

export default async function(){
  const db = await DB();
  
  const passwordHash = await hash('123456', 5);
  await db.query(`
      insert into users (name, email, password)
      values ($1, $2, $3)
  `, ['Admin', 'admin@jsway.ru', passwordHash]);
  
  return 0;
}