import { Controller } from 'types/controller';
import {
  EntityList as NotesList,
  EntityItem,
  EntityItemRequestParams as NotesItemRequestParams
} from 'types/entity';
import DB from 'db';

interface NotesItem extends EntityItem {
  title: string
  description: string
}

class Notes implements Controller<NotesItem, NotesList> {
  async list() {
    const db = await DB();
    const query = await db.query(`
      select * from notes
    `);
    return query.rows;
  }
  
  async get(request: NotesItemRequestParams) {
    const db = await DB();
    let { id } = request;
    const query = await db.query(`
      select * from notes where id=$1 limit 1
    `, [id]);
    return query.rows[0];
  }
}

export default Notes;