import { RoutableStatic } from "../router/route";
import PostgreSQL from "../db/drivers/pgsql";
import DBDefiner from "../db";

import { buildContext } from "../module/require";

interface ModelStatic<Model> extends RoutableStatic {
  new(...args: any): Model;
}

type Selectable = {
  filters?: Array<object>;
  select?: Array<string>
}

const { db } = DBDefiner;

const context = buildContext<ModelStatic<any>>(require.context('models', false, /\.ts$/));

abstract class Model<T = {}> {
  protected table: string = '';
  
  constructor() {
    return new Proxy(this, {
      get: (instance: Model<T>, property: keyof Model<T>) => {
        if(!this.table)
          throw new Error(`Table of ${this.constructor.name} is undefined! Define it in your model class!`);
        return instance[property];
      }
    });
  }
  
  async list(selection: Selectable = {}) {
    const { query }: PostgreSQL = await db();
    
    const { rows } = await query<T>(`
      select * from ${this.table}
    `);
    
    return rows;
  }
  
  async getById(id: number) {
    const { query }: PostgreSQL = await db();
    
    const { rows } = await query<T>(`
      select * from ${this.table} where id=$1 limit 1
    `, [ id ]);
    
    return rows[0];
  }
}

function getContextModuleByRouteName(routeName: string){
  const entry = Object.entries(context)
    .find(([, model]) => model.routeName === routeName);
  const [, contextItem] = entry as [string, ModelStatic<any>];
  return contextItem;
}

function getContextModulesRoutesNames() : string[] {
  return Object.entries(context)
    .map(([, { routeName }]) => routeName)
    .filter((v): v is string => typeof v !== 'undefined');
}

export {
  getContextModuleByRouteName,
  getContextModulesRoutesNames,
  ModelStatic,
  Selectable
};
export default Model;
