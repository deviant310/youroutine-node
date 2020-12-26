import Model from "core/model";

interface Note {
  title: string
  description: string
}

class Note extends Model<Note> {
  static routeAlias = 'notes';
  
  table = 'notes';
}

export default Note;