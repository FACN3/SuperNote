import React from 'react';
import { Editor } from './components/Editor';

export const App = (props) => (
  <div className="container">
    <Editor noteRoot={props.noteRoot}/>
  </div>
);
