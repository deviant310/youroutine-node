import NoteModel, { NoteScheme } from 'models/note';

class NoteController {
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
