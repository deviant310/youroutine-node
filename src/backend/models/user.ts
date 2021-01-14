import { compare } from "bcrypt";

import db from "core/db";
import Model, { ModelConstructor } from "core/db/model";

interface UserEntity {
  id: number;
  name: string;
  email: string;
}

class User extends Model<UserEntity> {
  table = 'users';
  
  async authenticate(login: string, password: string){
    const { query } = await db();
    
    const { rows } = await query(`
      select * from ${this.table} where email=$1 limit 1
    `, [ login ]);
    
    const user = rows[0];
    
    if(!user)
      throw new Error('Unauthenticated');
    
    const { id, password: passwordHash } = user;
    const isAuthenticated = await compare(password, passwordHash);
    
    if(!isAuthenticated)
      throw new Error('Unauthenticated');
    
    return id;
  }
}

const UserConstructor: ModelConstructor<User> = User;

export default UserConstructor;
