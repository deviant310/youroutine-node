import { HttpController, HttpValidator } from '@jsway/interior';

import NoteModel, { NoteScheme } from 'models/note';

class NotesController extends HttpController implements HttpController.Instance {
  async get (request: Request): Response {
    const validator = await new HttpValidator(...rules).validate(request);
    
    if (validator.hasErrors) {
      return validator.errors;
    }
    
    const { filters } = request.params;
    
    return (new NoteModel()).list(filters);
  }
  
  async post (request: Request): Response {
    const { body: data } = request;
    
    return (new NoteModel()).createMany(data);
  }
  
  async put (request: Request): Response {
    const { body: data } = request;
  
    return (new NoteModel()).updateMany(data);
  }
  
  async delete (request: Request): Response {
    const { body: ids } = request;
    
    return (new NoteModel()).deleteMany(ids);
  }
}

export default NotesController;
