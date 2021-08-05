import { Controller } from '@jsway/interior';

import NoteModel, { NoteScheme } from 'models/note';

class NotesController extends ControllerFactory {
  async get (filters?: Filters): Response {
    return (new NoteModel()).list(filters);
  }
  
  async post (data: NoteScheme[]): Response {
    return (new NoteModel()).createMany(data);
  }
  
  async put (data: NoteScheme[]): Response {
    return (new NoteModel()).updateMany(data);
  }
  
  async delete (ids: number[]): Response {
    return (new NoteModel()).deleteMany(ids);
  }
}

export default NotesController;
