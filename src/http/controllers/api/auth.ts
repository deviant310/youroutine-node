import { randomBytes } from 'crypto';
import { HttpController/*, HttpValidator*/ } from '@jsway/interior';

import UserModel from 'models/user';

type AuthReqBody = {
  login: string;
  password: string;
};

type AuthResBodySuccess = {
  accessToken: string;
};

type AuthResBodyError = {
  message: string;
  reason: string;
};

class AuthController extends HttpController implements HttpController {
  async post (request: HttpController.Request<unknown, AuthReqBody>): Promise<AuthResBodySuccess | AuthResBodyError> {
    const { login, password } = request.body;
  
    return (new UserModel())
      .authenticate(login, password)
      .then(userId => {
        const accessToken = randomBytes(24).toString('hex');
  
        request.session.userId = userId;
        request.session.accessToken = accessToken;
      
        return { accessToken };
      })
      .catch(err => {
        return {
          message: 'Unauthenticated',
          reason: err.message
        };
      });
  }
  
  get: undefined;
  put: undefined;
  delete: undefined;
}

export default AuthController;
