import React from 'react';

import NotesListItem from 'components/notes.list.item';
import { NotesItemProperties, NotesListFilter } from 'types/notes';
import { CatalogListRequest, CatalogListComponent } from 'types/catalog';

type Props = CatalogListRequest<NotesListFilter>
type State = CatalogListComponent<NotesItemProperties>

class NotesList extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    
    this.state = {
      data: []
    }
  }
  
  async componentDidMount() {
    let data: NotesItemProperties[] = await fetch('/api/notes/list', {method: 'post'}).then(r => r.json());
    this.setState({...this.state, ...{data}})
  }
  
  render(){
    return (
      <div className="notes">
        {this.state.data.map((item: NotesItemProperties, index: number) => (
          <NotesListItem data={item} key={index}/>
        ))}
      </div>
    );
  }
}

export default NotesList;
