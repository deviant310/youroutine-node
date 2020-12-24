import { compare } from "bcrypt";

import Model from "core/model";
import DB from "core/db";
import Session from "core/session";

type Entity = {
  id: number;
  name: string;
  email: string;
}

class User extends Model<Entity> {
  table = 'users';
  
  async authenticate(login: string, password: string){
    const db = await DB();
    
    const query = await db.query(`
      select * from ${this.table} where email=$1 limit 1
    `, [ login ]);
    
    const user = query.rows[0];
    
    if(!user)
      throw new Error('Unauthenticated');
    
    const { id, password: passwordHash } = user;
    const isAuthenticated = await compare(password, passwordHash);
    
    if(!isAuthenticated)
      throw new Error('Unauthenticated');
    
    return id;
  }
}

export { Entity };
export default User;