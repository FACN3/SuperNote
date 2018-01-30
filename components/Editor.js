import React from 'react';
import { Component } from 'react';
import { NoteContainer } from './NoteContainer';
import { render } from 'react-dom';

export class Editor extends Component {
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
  componentDidMount() {
    let notes = JSON.parse(localStorage.getItem('notes'))
    ? JSON.parse(localStorage.getItem('notes')) : [];

    this.setState(
      {
        allNotes: notes
      },
      () => {
        render(
          <NoteContainer allNotes={this.state.allNotes} />,
          this.props.noteRoot
        );
      }
    );
  }
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
        <div>
          <input onChange={this.recordInput} name="title" value={this.state.title} type="text" placeholder="Name your note here"/>
          <br></br>
          <textarea onChange={this.recordInput} placeholder="Write your note here..." name="editor" id="editor" cols="50"
             rows="20" value={this.state.description}>
          </textarea>
          <div>
            <button onClick={this.clearAndSave}>Save</button>
          </div>
        </div>
    );
  }
}
