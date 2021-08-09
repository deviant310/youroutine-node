import { Model, DBDriverPostgreSQL } from '@jsway/interior';

declare namespace NoteModel {
  type Schema = {
    id: number;
    title: string;
    description: string;
  };
}

class NoteModel extends Model<DBDriverPostgreSQL> implements Model.Instance {
  table = 'notes';
}

export default NoteModel;
