import { Http, HttpFactory, ControllerFactory } from '@jsway/interior';

import NoteModel, { NoteScheme } from 'models/note';

import auth from 'http/middleware/auth';
import { json } from 'http/middleware/body-parsers';
import { apiHeaders } from 'http/middleware/headers';

const http = new HttpFactory();

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
