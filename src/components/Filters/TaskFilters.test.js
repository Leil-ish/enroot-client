import React from 'react';
import ReactDOM from 'react-dom';
import TaskFilters from './Filters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskFilters />, div);
  ReactDOM.unmountComponentAtNode(div);
});