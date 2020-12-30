import Index, { ModelStatic } from "core/model";

interface NoteEntity {
  title: string
  description: string
}

class Note extends Index<NoteEntity> {
  static routeName = 'notes';
  
  table = 'notes';
}

const NoteStatic: ModelStatic<Note> = Note;

export default NoteStatic;
