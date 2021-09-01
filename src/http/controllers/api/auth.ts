import { randomBytes } from 'crypto';
import { HttpController/*, HttpValidator*/ } from '@foobar/nojo';

import UserModel from 'models/user';

type PostRequestBody = {
  login: string;
  password: string;
};

type PostResponseBody = {
  error: boolean;
  message: string | {
    accessToken: string;
  };
};

class AuthController extends HttpController implements HttpController {
  async get (request: HttpController.Request): Promise<PostResponseBody> {
    const { accessToken } = request.session;
    
    if (accessToken) {
      return { error: false, message: { accessToken } };
    } else {
      return { error: true, message: 'Unauthorized' };
    }
  }
  
  async post (request: HttpController.Request<unknown, PostRequestBody>): Promise<PostResponseBody> {
    const { login, password } = request.body;
  
    return (new UserModel())
      .authenticate(login, password)
      .then(userId => {
        const accessToken = randomBytes(24).toString('hex');
  
        request.session.userId = userId;
        request.session.accessToken = accessToken;
      
        return { error: false, message: { accessToken } };
      })
      .catch(err => ({ error: true, message: err.message }));
  }
  
  put: undefined;
  delete: undefined;
}

export default AuthController;
