import { lorem } from "faker";

import { Command } from "core/console";
import db from 'core/db';

const command: Command = async () => {
  const { query } = await db();
  
  for(let i in Array.from(Array(3)))
    await query(`
      insert into notes (title, description) values ($1, $2)
    `, [lorem.word(), lorem.paragraphs()]);
  
  return 0;
}

export default command;