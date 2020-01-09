import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import TendTask from './TendTask';

const props = {
  task: [
    {
      task_id: 51,
      plant_common_name: "Arizona Bristlegrass",
      maintenance_needed: "Water it.",
      modified: null,
      frequency: "Once Daily",
      details: "Not too much."
    },
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <TendTask {...props}/>
    </BrowserRouter>
    ,div);
  ReactDOM.unmountComponentAtNode(div);
});