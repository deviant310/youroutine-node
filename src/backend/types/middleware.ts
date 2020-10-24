namespace Middleware {
  export type ControllerConstructor = {
    new() : Controller;
  }
  
  export type Controller = {
    list(data: any): Array<object>
    get(data: any): object
  }
  
  export type ControllerRequestParams = {
    controller: keyof ControllersImports;
    action: keyof Controller;
  }
  
  export type ControllersImports = object
}

export = Middleware;