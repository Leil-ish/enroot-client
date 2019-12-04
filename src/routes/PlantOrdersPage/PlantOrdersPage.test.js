import React from 'react';
import ReactDOM from 'react-dom';
import PlantOrdersPage from './PlantOrdersPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlantOrdersPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});