import { resolve } from "path";

type Selectable = {
  filters?: Array<object>;
  select?: Array<string>
}

abstract class Model<Item> {
  endpoint: string;
  
  constructor() {
    return new Proxy(this, {
      get: (instance: Model<Item>, property: keyof Model<Item>) => {
        if(typeof this.endpoint === 'undefined')
          throw new Error(`Property "endpoint" of ${this.constructor.name} is undefined! Define it in your model class!`);
        return instance[property];
      }
    });
  }
  
  getById(id: number) : Promise<Item> {
    const endpoint = resolve(this.endpoint, 'get');
    
    return fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({id})
    })
      .then(r => r.json())
  }
  
  list(selection: Selectable = {}) : Promise<Array<Item>> {
    const endpoint = resolve(this.endpoint, 'list');
    
    return fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(selection)
    })
      .then(r => r.json())
  }
}

export { Selectable };
export default Model;

