import React from 'react';
import ReactDOM from 'react-dom';
import TaskPage from './TaskPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});