import React from 'react';
import { Component } from 'react';
import { Note } from './Note';

export class NoteContainer extends Component {
  state =  {
    notes: this.props.allNotes
  }
  render() {
    return (
      this.state.notes.map((note, i) => {
        return <Note key={i} title={note.title} description={note.description} />
      })
    );
  }
}
