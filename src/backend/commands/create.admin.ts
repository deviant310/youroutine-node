import { hash } from "bcrypt";

import DBDefiner from "core/db";

const { db } = DBDefiner;

export default async function(){
  const { query } = await db();
  
  const passwordHash = await hash('123456', 5);
  await query(`
      insert into users (name, email, password)
      values ($1, $2, $3)
  `, ['Admin', 'admin@jsway.ru', passwordHash]);
  
  return 0;
}
