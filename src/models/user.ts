import { compare } from 'bcrypt';

import { DatabaseFactory, PostgreSQLDriver, ModelFactory } from '@jsway/interior';

interface UserScheme {
  id: number
  name: string
  password: string
  email: string
}

const db = new DatabaseFactory();

class UserModel extends ModelFactory {
  table = 'users';
  
  async authenticate (login: string, password: string): Promise<number> {
    const connection = await db.connection<PostgreSQLDriver>();
    
    const { rows } = await connection.query<UserScheme>(`
      select * from ${this.table} where email=$1 limit 1
    `, [login]);
    
    const user = rows[0];
    
    if (typeof user === 'undefined') {
      throw new Error(`User "${login}" is not exist!`);
    }
    
    const { id, password: passwordHash } = user;
    const isAuthenticated = await compare(password, passwordHash);
    
    if (!isAuthenticated) {
      throw new Error(`Wrong password for user "${login}"!`);
    }
    
    return id;
  }
}

export default UserModel;
