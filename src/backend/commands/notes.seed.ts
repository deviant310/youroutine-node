import { lorem } from "faker";

import DBDefiner from 'core/db';

const { db } = DBDefiner;

export default async function(){
  const { query } = await db();
  
  for(let i in Array.from(Array(3)))
    await query(`
      insert into notes (title, description) values ($1, $2)
    `, [lorem.word(), lorem.paragraphs()]);
  
  return 0;
}
