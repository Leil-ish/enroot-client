import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import TendTask from './TendTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <TendTask />
    </BrowserRouter>
    ,div);
  ReactDOM.unmountComponentAtNode(div);
});