import { Http, HttpController } from '@jsway/interior';
import { readFileSync } from 'fs';
import { resolve } from 'path';

class IndexController extends HttpController implements HttpController {
  async get (): Promise<Buffer> {
    const staticPath = Http.getStaticPath();
    
    return readFileSync(resolve(staticPath, 'index.html'));
  }
  
  post: undefined;
  put: undefined;
  delete: undefined;
}

export default IndexController;
