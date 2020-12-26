import { withMiddleware, Routable } from "core/router/route";

import auth from "middlewares/auth";

const routes: Routable = () => {
  return [
    {
      method: 'get',
      path: /\/(?!login).*/,
    }
  ];
};

export default withMiddleware(routes, auth);