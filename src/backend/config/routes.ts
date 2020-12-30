import { resolve } from "path";

import { getContextModulesRoutesNames } from "core/model";

const modelsPaths = getContextModulesRoutesNames();

const routes = {
  signIn: '/signin',
  auth: '/auth',
  model: `/:model(${modelsPaths.join('|')})`,
  modelItem: resolve(`/:model(${modelsPaths.join('|')})`, ':id')
}

export default routes;
