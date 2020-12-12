import React from 'react';
import { Link } from 'react-router-dom';

import { RouteComponent } from "core/route.component";

import { Note } from "models/notes";

type Props = RouteComponent<Note>

class NotesListItem extends React.PureComponent<Props> {
  render(){
    const { id, title, description } = this.props.data;
    
    return (
      <Link to={`/notes/${id}`}>
        <div className="notes-list-item mb-3">
          <h5>{title}</h5>
          <div className="hr"/>
          <div>{description}</div>
        </div>
      </Link>
    );
  }
}

export default NotesListItem;