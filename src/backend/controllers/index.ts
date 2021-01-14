import { Routable } from "core/router";
import { withMiddleware, routePath } from "core/router/route";

import auth from "middlewares/auth";

const routes: Routable = () => ([
  {
    method: 'get',
    path: routePath('signIn')
  },
  {
    method: 'get',
    path: routePath('model')
  },
  {
    method: 'get',
    path: routePath('modelItem')
  }
]);

export default withMiddleware(routes, auth);