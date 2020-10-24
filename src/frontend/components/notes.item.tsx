import React, { Fragment } from 'react';

import { NotesItemProperties, NotesItemRequestParams } from 'types/notes';
import { CatalogItemRequest, CatalogItemComponent } from "types/catalog";

type Props = CatalogItemRequest<NotesItemRequestParams>;
type State = CatalogItemComponent<NotesItemProperties>;

class NotesItem extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    
    this.state = {
      data: null
    }
  }
  
  async componentDidMount() {
    let id : number = this.props.id || +this.props.match.params.id,
      data: NotesItemProperties = await fetch('/api/notes/get', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({id})
      }).then(r => r.json());
    this.setState({...this.state, ...{data}})
  }
  
  render() {
    if(!this.state.data)
      return <Fragment/>
    
    let { title, description }: NotesItemProperties = this.state.data;

    return (
      <div className="notes-item flex-grow-1 mb-3">
        <h5>{title}</h5>
        <div className="hr"/>
        <div>{description}</div>
      </div>
    );
  }
}

export default NotesItem;