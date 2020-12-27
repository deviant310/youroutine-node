import Index, { ModelStatic } from "core/model";

interface NoteEntity {
  title: string
  description: string
}
debugger;
class Note extends Index<NoteEntity> {
  static routeName = 'notes';
  
  table = 'notes';
}

const NoteStatic: ModelStatic<Note> = Note;

export default NoteStatic;