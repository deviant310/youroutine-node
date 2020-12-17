import React from 'react';

import { Styles } from "core/styles";
import {
  RouteComponentRequest,
  RouteComponent
} from "core/route.component";

import Note, { NoteRequest } from "models/note";

type Props = RouteComponentRequest<NoteRequest>;
type State = RouteComponent<Note | void>;

class NotesItem extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    
    this.state = {
      data: undefined
    }
  }
  
  async componentDidMount() {
    let id : number = this.props.id || +this.props.match.params.id,
      data = await (new Note).getById(id);
    this.setState({...this.state, ...{data}})
  }
  
  render() {
    if(!this.state.data)
      return '';
    
    const { title, description } = this.state.data;
    const styles: Styles = {
      title: {
        textTransform: "capitalize"
      }
    }

    return (
      <div className="notes-item flex-grow-1 mb-3">
        <h5 style={styles.title}>{title}</h5>
        <div className="hr"/>
        <div>{description}</div>
      </div>
    );
  }
}

export default NotesItem;