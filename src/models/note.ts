import { ModelFactory } from '@jsway/interior';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface NoteScheme {
  title: string
  description: string
}

class NoteModel extends ModelFactory {
  table = 'notes';
}

export { NoteScheme };
export default NoteModel;
