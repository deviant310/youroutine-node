import React from 'react';

import { Selectable } from "core/model";
import {
  RouteComponentRequest,
  RouteComponent
} from "core/route.component";

import Notes, { Note } from "models/notes";

import NotesListItem from 'components/notes.list.item';

type Props = RouteComponentRequest<Selectable>
type State = RouteComponent<Note[]>

class NotesList extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    
    this.state = {
      data: []
    }
  }
  
  async componentDidMount() {
    let data = await (new Notes).list();
    this.setState({...this.state, ...{data}})
  }
  
  render(){
    return (
      <div className="notes">
        {this.state.data.map((item: Note, index: number) => (
          <NotesListItem data={item} key={index}/>
        ))}
      </div>
    );
  }
}

export default NotesList;
