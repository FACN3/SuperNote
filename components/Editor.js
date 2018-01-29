import React from 'react';
import { Component } from 'react';
import Mario from '../mario.json';

export class Editor extends Component {
  state = {
    title: "",
    description: ""
  };
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
  saveAndClear = () => {
    const title = this.state.title
      const note = {
        [title]: this.state.description
      }
      console.log(note);
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
            <button onClick={this.saveAndClear}>Save</button>
          </div>
        </div>
    );
  }
}
