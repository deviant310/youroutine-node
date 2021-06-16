import Model, { ModelStatic } from '@jsway/interior/core/model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface NoteScheme {
  title: string
  description: string
}

class NoteModel extends Model {
  table = 'notes';
}

const NoteModelStatic: ModelStatic<NoteModel> = NoteModel;

export default NoteModelStatic;
