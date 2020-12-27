import { buildContext } from "../module/require";
import { ModelStatic } from "./index";

const context = buildContext<ModelStatic<any>>(require.context('models', false, /\.ts$/));

export function getContextModuleByRouteName(routeName: string){
  const entry = Object.entries(context)
    .find(([, model]) => model.routeName === routeName);
  const [, contextItem] = entry as [string, ModelStatic<any>];
  return contextItem;
}

export function getContextModulesRoutesNames() : string[] {
  return Object.entries(context)
    .map(([, { routeName }]) => routeName)
    .filter((v): v is string => typeof v !== 'undefined');
}