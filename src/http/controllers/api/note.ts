import { HttpController, HttpValidator } from '@jsway/interior';

import NoteModel, { NoteScheme } from 'models/note';

class NoteController extends HttpController implements HttpController.Instance {
  async get (id: number): Response {
    return (new NoteModel()).getById(id);
  }
  
  async put (id: number, data: NoteScheme): Response {
    return (new NoteModel()).update(id, data);
  }
  
  async delete (id: number): Response {
    return (new NoteModel()).delete(id);
  }
}

export default NoteController;
