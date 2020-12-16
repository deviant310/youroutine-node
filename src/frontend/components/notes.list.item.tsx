import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from "core/styles";
import { RouteComponent } from "core/route.component";

import { Note } from "models/notes";

type Props = RouteComponent<Note>

class NotesListItem extends React.PureComponent<Props> {
  render(){
    const { id, title, description } = this.props.data;
    const styles: Styles = {
      title: {
        textTransform: "capitalize"
      }
    }
    
    return (
      <Link to={`/notes/${id}`}>
        <div className="notes-list-item mb-3">
          <h5 style={styles.title}>{title}</h5>
          <div className="hr"/>
          <div>{description}</div>
        </div>
      </Link>
    );
  }
}

export default NotesListItem;