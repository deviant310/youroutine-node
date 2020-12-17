import Model from "core/model";

interface NoteRequest {
  id: number
}

interface Note extends NoteRequest {
  title: string,
  description: string
}

class Note extends Model<Note> {
  endpoint = '/api/note';
}

export { NoteRequest };
export default Note;