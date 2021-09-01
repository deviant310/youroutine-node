import { Http, HttpController } from '@jsway/interior';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

class IndexController extends HttpController implements HttpController {
  async get (): Promise<Buffer | undefined> {
    const staticPath = Http.getConfig().staticPath;
    const indexPath = resolve(staticPath, 'index.html');
    
    if (existsSync(indexPath)) {
      return readFileSync(indexPath);
    }
  }
  
  post: undefined;
  put: undefined;
  delete: undefined;
}

export default IndexController;
