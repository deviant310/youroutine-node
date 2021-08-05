import { HttpController } from '@jsway/interior';
import { HttpValidator } from '@jsway/interior';

import NoteModel, { NoteScheme } from 'models/note';

class NotesController extends HttpController implements HttpController.Instance {
  async get (request: Request): Response {
    const validator = await new HttpValidator(...rules).validate(request);
    
    if (validator.hasErrors) {
      return validator.errors;
    }
    
    return (new NoteModel()).list(filters);
  }
  
  async post (data: NoteScheme[]): Response {
    return (new NoteModel()).createMany(data);
  }
  
  async put (request: Request): Response {
    
    const { id } = requestParams;
    
    if (id) {
      return (new NoteModel()).update(id, requestBody);
    } else {
      return (new NoteModel()).updateMany(requestBody);
    }
  }
  
  async delete (ids: number[]): Response {
    return (new NoteModel()).deleteMany(ids);
  }
}

export default NotesController;
