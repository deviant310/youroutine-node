import { lorem } from 'faker';

import { DB, ConsoleCommand } from '@foobar/nojo';

const db = new DB();

class NotesSeed extends ConsoleCommand implements ConsoleCommand {
  async run (): Promise<ConsoleCommand.Code> {
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
