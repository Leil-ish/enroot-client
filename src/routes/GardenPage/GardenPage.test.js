import React from 'react';
import ReactDOM from 'react-dom';
import GardenPage from './GardenPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GardenPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});