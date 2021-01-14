import Model, { ModelConstructor } from "core/db/model";

interface NoteEntity {
  title: string
  description: string
}

class Note extends Model<NoteEntity> {
  static routeName = 'notes';
  
  table = 'notes';
}

const NoteConstructor: ModelConstructor<Note> = Note;

export default NoteConstructor;
