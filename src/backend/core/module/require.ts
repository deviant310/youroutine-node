import { parse } from "path";

function buildContext<Context = void>(context: __WebpackModuleApi.RequireContext){
  return context
    .keys()
    .reduce((obj: { [ key: string ]: Context }, key) => {
      const module: Context = context(key).default;
      const newKey = parse(key).name;
      obj[newKey] = module;
      return obj;
    }, {});
}

export { buildContext }