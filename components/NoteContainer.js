import React from 'react';
import { Component } from 'react';
import { Note } from './Note';

export class NoteContainer extends Component {
  state =  {
    notes: this.props.allNotes,
  }
  render() {
    return (
      <div className="container">
      {this.state.notes.map((note, i) => {
        if (note.title !== undefined  || note.description !== undefined) {
          return <Note key={i} index={i} title={note.title} description={note.description} />
        }
      })}
    </div>
    );
  }
}
