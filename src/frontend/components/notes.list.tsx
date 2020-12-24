import React from 'react';

import { Redirect } from "react-router-dom";

import { Selectable } from "core/model";
import {
  RouteComponentRequest,
  RouteComponent,
  Redirectable
} from "core/route.component";

import Note from "models/note";

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
    let data = await (new Note).list();
    this.setState({...this.state, ...{data}})
  }
  
  render(){
    const { data } = this.state;
    const { redirect } = data as Redirectable;
    
    if(redirect)
      return <Redirect to={redirect}/>
    
    return (
      <div className="notes">
        {(data as Note[]).map((item: Note, index: number) => (
          <NotesListItem data={item} key={index}/>
        ))}
      </div>
    );
  }
}

export default NotesList;
