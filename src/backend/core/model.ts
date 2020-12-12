import DB from 'db';
import { QueryResult } from "types/db";

type Selectable = {
  filters?: Array<object>;
  select?: Array<string>
}

type ModelEntity<Entity> = Promise<QueryResult<Entity>>;

abstract class Model<Entity> {
  table: string = '';
  
  constructor() {
    return new Proxy(this, {
      get: (instance: Model<Entity>, property: keyof Model<Entity>) => {
        if(!this.table)
          throw new Error(`Table of ${this.constructor.name} is undefined! Define it in your model class!`);
        return instance[property];
      }
    });
  }
  
  async list(selection: Selectable = {}) : ModelEntity<Entity[]> {
    const db = await DB();
    
    const query = await db.query(`
      select * from ${this.table}
    `);
    
    return query.rows;
  }
  
  async getById(id: number) : ModelEntity<Entity> {
    const db = await DB();
    
    const query = await db.query(`
      select * from ${this.table} where id=$1 limit 1
    `, [ id ]);
    
    return query.rows[0];
  }
}

export { Selectable, ModelEntity };
export default Model;