import { compare } from 'bcrypt';
import { DB, DBDriverPostgreSQL, Model } from '@foobar/nojo';

declare namespace UserModel {
  type Schema = {
    id: number;
    name: string;
    email: string;
    password: string;
    active: boolean;
  };
}

const db = new DB();

class UserModel extends Model implements Model {
  table = 'users';
  
  async authenticate (login: string, password: string): Promise<number> {
    const connection = await db.connection<DBDriverPostgreSQL>();
    
    const { rows } = await connection.query<UserModel.Schema>(`
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
