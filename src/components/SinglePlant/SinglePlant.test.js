import React from 'react';
import ReactDOM from 'react-dom';
import SinglePlant from './SinglePlant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SinglePlant />, div);
  ReactDOM.unmountComponentAtNode(div);
});