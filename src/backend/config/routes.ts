import { resolve } from "path";

import Model from "core/db/model";

const modelsPaths = Model.getConstructorsRoutesNames();

const routes = {
  signIn: '/signin',
  auth: '/auth',
  model: `/:model(${modelsPaths.join('|')})`,
  modelItem: resolve(`/:model(${modelsPaths.join('|')})`, ':id')
}

export default routes;
