import { lorem } from 'faker';

import { DatabaseFactory, Console } from '@jsway/interior';

const db = new DatabaseFactory();

class NotesSeed implements Console.Command {
  async run (): Promise<Console.CommandCode> {
    const { query } = await db.connection();
    
    await Array.from(Array(3)).reduce(promise => promise.then(async () => {
      await query(`
        insert into notes (title, description) values ($1, $2)
      `, [
        lorem.word(),
        lorem.paragraphs()
      ]);
    }), Promise.resolve());
    
    return 0;
  }
}

export default NotesSeed;
