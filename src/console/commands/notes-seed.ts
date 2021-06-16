import { lorem } from 'faker';

import Database from '@jsway/interior/core/db';
import { CommandCode, Command } from '@jsway/interior/core/console';

const DB = new Database();

class NotesSeed implements Command {
  async run (): Promise<CommandCode> {
    const { query } = await DB.connection();
    
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
