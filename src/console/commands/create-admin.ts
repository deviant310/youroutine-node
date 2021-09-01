import { hash } from 'bcrypt';

import { DB, ConsoleCommand } from '@foobar/nojo';

const db = new DB();

class CreateAdmin extends ConsoleCommand implements ConsoleCommand {
  async run (): Promise<ConsoleCommand.Code> {
    const { query } = await db.connection();
    
    const passwordHash = await hash('123456', 5);
    await query(`
      insert into users (name, email, password)
      values ($1, $2, $3)
  `, ['Admin', 'admin@foobar.ru', passwordHash]);
    
    return 0;
  }
}

export default CreateAdmin;
