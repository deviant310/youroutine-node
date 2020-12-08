import { QueryResult } from "types/db";

namespace Controller {
  export type Controller<Item, List> = {
    list(data: any): Promise<List>
    get(data: any): Promise<Item>
  }
}

export = Controller;