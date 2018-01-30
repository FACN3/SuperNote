import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

render(
  <App noteRoot={document.getElementById('root2')}/>,
  document.getElementById('root')
)
