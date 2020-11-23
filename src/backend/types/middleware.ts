namespace Middleware {
  export type ControllerConstructor = {
    new() : Controller;
  }
  
  export type Controller = {
    list(data: any): Array<object>
    get(data: any): object
  }
  
  export type ControllerRequest<ContextKeys> = {
    controller: ContextKeys[keyof ContextKeys];
    action: keyof Controller;
  }
  
  export type ControllersContext = __WebpackModuleApi.RequireContext
}

export = Middleware;