import Model from "core/model";
import DB from "core/db";
import { compare } from "bcrypt";

type Entity = {
  id: number;
  name: string;
  email: string;
}

class User extends Model<Entity> {
  table = 'users';
  
  async authorize(){
    return {name: 'Vasya'};
    throw new Error('Unauthorized');
  }
  
  async authenticate(login: string, password: string){
    const db = await DB();
    
    const query = await db.query(`
      select * from ${this.table} where email=$1 limit 1
    `, [ login ]);
    
    const user = query.rows[0];
    
    if(!user)
      throw new Error('Unauthenticated');
    
    const { password: passwordHash } = user;
    const isAuthenticated = await compare(password, passwordHash);
    
    if(!isAuthenticated)
      throw new Error('Unauthenticated');
    
    return user;
  }
}

export { Entity };
export default User;