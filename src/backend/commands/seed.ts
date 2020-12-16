import DB from 'core/db';
import { lorem } from "faker";

export default async function(){
  const db = await DB();
  
  for(let i in Array.from(Array(3)))
    await db.query(`
      insert into notes (title, description) values ($1, $2)
    `, [lorem.word(), lorem.paragraphs()]);
  
  return 0;
}