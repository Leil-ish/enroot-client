import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import TendOrder from './TendOrder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <TendOrder />
    </BrowserRouter>
    ,div);
  ReactDOM.unmountComponentAtNode(div);
});