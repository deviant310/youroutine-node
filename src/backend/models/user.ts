import { compare } from "bcrypt";

import Model, { ModelStatic } from "core/model";
import DBDefiner from "core/db";

interface UserEntity {
  id: number;
  name: string;
  email: string;
}

const { db } = DBDefiner;

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

const UserStatic: ModelStatic<User> = User;

export default UserStatic;
