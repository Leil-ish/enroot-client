import React from 'react';
import ReactDOM from 'react-dom';
import TaskResults from './TaskResults';
import {BrowserRouter} from 'react-router-dom'

const props = {
  tasks: [
    {
      task_id: 51,
      plant_common_name: "Arizona Bristlegrass",
      maintenance_needed: "Water it.",
      modified: null,
      frequency: "Once Daily",
      details: "Not too much."
    },
    {
      task_id: 43,
      plant_common_name: "Grayleaf Draba",
      maintenance_needed: "augue luctus",
      modified: null,
      frequency: "est",
      details: "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat"
    }
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <TaskResults {...props}/>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});