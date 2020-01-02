import React, {Component} from 'react';
import TendTask from '../TendTask/TendTask';
import {compareValues} from '../Utils/Utils'
import '../TaskResults/TaskResults.css';


class TaskResults extends Component {

//Filter and sort functionality for saved garden tasks
  render() {
    const {property} = this.props;
    const list = this.props.tasks
    .sort(compareValues(`${property}`))
    .map((task, key) => 
      <TendTask 
        {...task} 
        key={key}
        task={task}
        plantId={task.plant_id}
        taskId={task.id}
        />);

    return (
        <ul className='taskList'>
            <li>{list}</li>
        </ul>
    );
  }
}

export default TaskResults;
