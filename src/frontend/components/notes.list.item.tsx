import React from 'react';
import { Link } from 'react-router-dom';

import { NotesItemProperties } from 'types/notes';
import { CatalogItemComponent } from "types/catalog";

type Props = CatalogItemComponent<NotesItemProperties>

class NotesListItem extends React.PureComponent<Props> {
  render(){
    let data: NotesItemProperties = this.props.data,
      { id, title, description } = data;
    
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