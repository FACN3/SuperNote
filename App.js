import React from "react";
import { Editor } from "./components/Editor";

export const App = props => (
  <div className="container blue-grey lighten-5">
    <Editor noteRoot={props.noteRoot} />
  </div>
);
