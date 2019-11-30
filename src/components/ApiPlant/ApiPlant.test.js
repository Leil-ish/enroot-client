import React from 'react';
import ReactDOM from 'react-dom';
import ApiPlant from './ApiPlant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApiPlant />, div);
  ReactDOM.unmountComponentAtNode(div);
});
