import { resolve } from "path";

type Selectable = {
  filters?: Array<object>;
  select?: Array<string>
}

abstract class Model<Entity> {
  endpoint: string = '';
  
  constructor() {
    return new Proxy(this, {
      get: (instance: Model<Entity>, property: keyof Model<Entity>) => {
        if(!this.endpoint)
          throw new Error(`Property "endpoint" of ${this.constructor.name} is undefined! Define it in your model class!`);
        return instance[property];
      }
    });
  }
  
  list(selection: Selectable = {}) : Promise<Entity[]> {
    return fetch(this.endpoint)
      .then(r => r.json())
  }
  
  getById(id: number) : Promise<Entity> {
    const endpoint = resolve(this.endpoint, id.toString());
    
    return fetch(endpoint)
      .then(r => r.json())
  }
}

export { Selectable };
export default Model;