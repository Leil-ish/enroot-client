import React from 'react';
import ReactDOM from 'react-dom';
import EditPlantPage from './EditPlantPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPlantPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});