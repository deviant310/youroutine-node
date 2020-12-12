import Model from "core/model";

interface NoteRequest {
  id: number
}

interface Note extends NoteRequest {
  title: string,
  description: string
}

class Notes extends Model<Note> {
  endpoint = '/api/notes';
}

export { NoteRequest, Note };
export default Notes;