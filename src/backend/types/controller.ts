import { EntityItem, EntityList } from "types/entity";

namespace Controller {
  export type ControllerConstructor = {
    new() : Controller;
  }
  
  export type Controller = {
    list(data: any): EntityList
    get(data: any): EntityItem
  }
  
  export type ControllerMethod = Controller[keyof Controller];
}

export = Controller;