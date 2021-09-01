import { Model } from '@foobar/nojo';

declare namespace NoteModel {
  type Schema = {
    id: number;
    title: string;
    description: string;
  };
}

class NoteModel extends Model implements Model {
  table = 'notes';
}

export default NoteModel;
