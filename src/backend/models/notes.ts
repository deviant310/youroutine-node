import Model from "core/model";

type Entity = {
  title: string
  description: string
}

class Notes extends Model<Entity> {
  table = 'notes';
}

export { Entity };
export default Notes;