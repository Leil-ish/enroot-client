import React, { Component } from 'react';
import './TaskFilters.css';

class TaskFilters extends Component {
  
    render() {
  
        return (
            <div className='customize-results'>
                <div className='Sort'>
                    <form className='sort-selection' aria-label='task-sort'>
                        <label htmlFor='task-sort-input'>
                        Sort by:
                        </label>
                        <select id='task-sort' aria-label='task-sort' onChange={e => this.props.onTaskSort(e.target.value)}>
                            <option value='plant_common_name' aria-label='plant_common_name' defaultValue>Plant Name</option>
                            <option value='frequency' aria-label='frequency'>Task Frequency</option>
                            <option value='maintenance_needed' aria-label='maintenance_needed'>Maintenance Needed</option>
                        </select>
                    </form>
                </div>
            </div>
        );
      }
}

export default TaskFilters;