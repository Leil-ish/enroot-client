import React from 'react';
import ReactDOM from 'react-dom';
import PlantTasksPage from './PlantTasksPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlantTasksPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});