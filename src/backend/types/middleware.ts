import { Controller } from "types/controller";

namespace Middleware {
  export type ControllerRequestParams = {
    controller: string;
    action: keyof Controller;
  }
  
  export type ControllersContext = __WebpackModuleApi.RequireContext
}

export = Middleware;