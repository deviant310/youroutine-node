namespace Entity {
  export interface EntityItemRequestParams {
    id: number;
  }
  
  export interface EntityItem extends EntityItemRequestParams {}
  
  export type EntityList = Array<EntityItem>;
}

export = Entity;