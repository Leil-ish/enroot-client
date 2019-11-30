import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import AddPlantPage from './AddPlantPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <AddPlantPage />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});