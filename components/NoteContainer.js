import React from 'react';
import { Component } from 'react';
import { Note } from './Note';

export class NoteContainer extends Component {
  state =  {
    notes: this.props.allNotes
  }
  render() {
    if (this.state.notes !== undefined) {
    return (
      this.state.notes.map((note, i) => {
        return <Note key={i} title={note.title} description={note.description} />
      })
    );
  }
    else {
      return <div><h2>Nothing to show</h2></div>
    }
  }
}
