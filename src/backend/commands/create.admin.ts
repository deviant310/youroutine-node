import { hash } from "bcrypt";

import { Command } from "core/console";
import db from "core/db";

const command: Command = async () => {
  const { query } = await db();
  
  const passwordHash = await hash('123456', 5);
  await query(`
      insert into users (name, email, password)
      values ($1, $2, $3)
  `, ['Admin', 'admin@jsway.ru', passwordHash]);
  
  return 0;
}

export default command;