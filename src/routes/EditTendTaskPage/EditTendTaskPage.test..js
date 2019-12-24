import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import EditTendTaskPage from './EditTendTaskPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <EditTendTaskPage />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});