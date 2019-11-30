import React from 'react';
import ReactDOM from 'react-dom';
import SinglePlantPage from './SinglePlantPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SinglePlantPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});