import { Request as ExpressRequest } from 'express';
import { HttpController/*, HttpValidator*/ } from '@jsway/interior';

import NoteModel from 'models/note';

type SelectParams = {
  id: number;
};

//type CreateBody = NoteModel.Schema[];

class NoteController extends HttpController implements HttpController {
  async get (request: ExpressRequest<SelectParams>): Promise<NoteModel.Schema> {
    /*const validator = await new HttpValidator(...rules).validate(request);
    
    if (validator.hasErrors) {
      return validator.errors;
    }*/
    
    const { id } = request.params;
    
    return (new NoteModel()).getById<NoteModel.Schema>(id);
  }
  
  post: undefined;
  put: undefined;
  delete: undefined;
  
  /*async post (request: HttpController.Request<unknown, CreateBody>): Promise<NoteModel.Schema[]> {
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
  }*/
}

export default NoteController;
