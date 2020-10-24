import React from 'react';

import NotesList from 'components/notes.list';
import NotesItem from 'components/notes.item';

import { Redirect, Route, Switch } from "react-router-dom";

class Main extends React.PureComponent {
  render(){
    return (
      <div className="main d-flex flex-column py-4 vh-100">
        <h3>
          <i className="fal fa-bars"/>
          <span className="mr-3" />
          <span>Заметки</span>
        </h3>
        <div className="mb-4" />
        <Switch>
          <Route exact path="/notes" component={NotesList}/>
          <Route exact path="/notes/:id" component={NotesItem} />
          <Redirect to='/notes'/>
        </Switch>
      </div>
    );
  }
}

export default Main;