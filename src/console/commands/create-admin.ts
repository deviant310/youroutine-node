import { hash } from 'bcrypt';

import Database from '@jsway/interior/core/db';
import { CommandCode, Command } from '@jsway/interior/core/console';

const DB = new Database();

class CreateAdmin implements Command {
  async run (): Promise<CommandCode> {
    const { query } = await DB.connection();
    
    const passwordHash = await hash('123456', 5);
    await query(`
      insert into users (name, email, password)
      values ($1, $2, $3)
  `, ['Admin', 'admin@jsway.ru', passwordHash]);
    
    return 0;
  }
}

export default CreateAdmin;
