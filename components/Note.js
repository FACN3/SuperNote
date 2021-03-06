import React from 'react';
import { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';

export class Note extends Component {
  state = {
    showNote: true,
    editing: false,
    newTitle: this.props.title,
    newDescription: this.props.description
  };
  delete = (e) => {
      this.setState({showNote: false})
      let myStorage = JSON.parse(localStorage.getItem('notes'));
      myStorage[this.props.index] = {};
      localStorage.setItem('notes', JSON.stringify(myStorage));
  };
  editing = (e) => {
    this.setState({editing: true})
  };
  recordEdits = (e) => {
    if (e.target.name === "title") {
      this.setState({
          newTitle: e.target.value
      })
    }
    else {
      this.setState({
        newDescription: e.target.value
      })
    }
  };
  saveEdit = () => {
    this.setState({editing: false});
    let note = {
      title: this.state.newTitle,
      description: this.state.newDescription
    };
    let myStorage = JSON.parse(localStorage.getItem('notes'));
    myStorage[this.props.index] = note;
    localStorage.setItem('notes', JSON.stringify(myStorage));
  };
  render() {
    if (this.state.showNote && !this.state.editing) {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.state.newTitle}</span>
              <p>{this.state.newDescription}</p>
            </div>
            <div className="card-action">
              <button className="delete" onClick={this.delete}>Delete</button>
              <button className="edit" onClick={this.editing}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if (this.state.editing) {
      return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <input name="title" onChange={this.recordEdits} type="text"
                  className="card-title" value={this.state.newTitle}>
                  </input>
                <input name="description" onChange={this.recordEdits} type="text"
                   value={this.state.newDescription}>
                   </input>
              </div>
              <div className="card-action">
                <button onClick={this.saveEdit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  else {
    return (
      <div>
      </div>
    );
  }
  }
}
