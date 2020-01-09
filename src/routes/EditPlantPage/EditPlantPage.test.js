import React from 'react';
import ReactDOM from 'react-dom';
import EditPlantPage from './EditPlantPage';
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <EditPlantPage />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});