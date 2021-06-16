import { compare } from 'bcrypt';

import Model, { ModelStatic } from '@jsway/interior/core/model';
import Database from '@jsway/interior/core/db';
import PostgreSQL from '@jsway/interior/core/db/drivers/pgsql';

interface UserScheme {
  id: number
  name: string
  password: string
  email: string
}

const DB = new Database();

class UserModel extends Model {
  table = 'users';
  
  async authenticate (login: string, password: string): Promise<number> {
    const connection = await DB.connection<PostgreSQL>();
    
    const { rows } = await connection.query<UserScheme>(`
      select * from ${this.table} where email=$1 limit 1
    `, [login]);
    
    const user = rows[0];
    
    if (typeof user === 'undefined') {
      throw new Error('Unauthenticated');
    }
    
    const { id, password: passwordHash } = user;
    const isAuthenticated = await compare(password, passwordHash);
    
    if (!isAuthenticated) {
      throw new Error('Unauthenticated');
    }
    
    return id;
  }
}

const UserStatic: ModelStatic<UserModel> = UserModel;

export default UserStatic;
