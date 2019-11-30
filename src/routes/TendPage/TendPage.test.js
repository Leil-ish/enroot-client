import React from 'react';
import ReactDOM from 'react-dom';
import TendPage from './TendPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TendPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});