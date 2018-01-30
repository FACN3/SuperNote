import React from 'react';
import { Component } from 'react';
import { NoteContainer } from './NoteContainer';
import { render } from 'react-dom';
import '../styles.css';

export class Editor extends Component {
  componentDidMount() {
    let notes = JSON.parse(localStorage.getItem('notes'))
    ? JSON.parse(localStorage.getItem('notes')) : [];

    if (notes.length > 1) {
      let isEmpty = notes.filter((a) => {
        return a.title !== undefined || a.description !== undefined
      });
      if (isEmpty.length === 0) {
        localStorage.clear();
      }
    }

    this.setState({allNotes: notes}, () => {
        render(
          <NoteContainer allNotes={this.state.allNotes} />,
          this.props.noteRoot
        );
      }
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [],
      title: "",
      description: "",
    };
  }
  recordInput = (e) => {
    if (e.target.name === "title") {
      this.setState({
        title : e.target.value
      })
    } else  {
      this.setState({
        description : e.target.value
      })
    }
  };
  clearAndSave = () => {
    const note = {
      title: this.state.title,
      description: this.state.description
    }

    let myNotes = this.state.allNotes;
    if (this.state.title !== '' || this.state.description !== '') {
      myNotes.push(note);
    }
    localStorage.setItem('notes', JSON.stringify(myNotes));
    this.setState({
      allNotes: myNotes,
      title: '',
      description: ''
    }, () => render(
        <NoteContainer allNotes={this.state.allNotes}/>,
        this.props.noteRoot
      )
    );
  };
  render() {
    return (
        <div id="editor">
          <div>
          <input id="note_title" className="" onChange={this.recordInput} name="title" value={this.state.title}
             type="text" placeholder="Name your note here">
           </input>
         </div>
          <br></br>
          <textarea onChange={this.recordInput} placeholder="Write your note here..."
            name="editor" id="editor"
             value={this.state.description}>
          </textarea>
          <div>
            <button id="editor-save" onClick={this.clearAndSave}>Save</button>
          </div>
        </div>
    );
  }
}
