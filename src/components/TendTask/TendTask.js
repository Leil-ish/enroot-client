import React, {Component} from 'react';
import {Button} from '../Utils/Utils'
import PlantContext from '../../contexts/PlantContext';
import {withRouter} from 'react-router-dom';
import TokenService from '../../services/token-service'
import config from '../../config'
import './TendTask.css'

class TendTask extends Component {

  static contextType = PlantContext;

  static defaultProps ={
    onDeleteTask: () => {},
    match: { params: {} },
  }

  //Delete for task
  handleClickDelete = e => {
    e.preventDefault()

    const plantId = this.props.id
    const taskId = this.props.task.task_id
    const plant = this.props.plant
    
    fetch (`${config.API_ENDPOINT}/garden/${plantId}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteTask(taskId)
        this.props.onDeleteTask(taskId)
      })
      .then(() => {
        this.props.history.push(`/garden/${plant.id}/tasks`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    let {task} = this.props
    console.log(this.props.history)

    console.log(this.props)

    return (
      <div className = 'single-task'>
            <h3 className='Single_maintenance_needed'>{task.maintenance_needed}</h3>
            <hr/>
            <h4>{task.frequency}</h4>
            <p>{task.details}</p>
        <Button
          className='Task_delete'
          type='button'
          //Confirmation of delete
          onClick={e =>
            window.confirm("Are you sure you wish to delete this item?") &&
            this.handleClickDelete(e)
          }
        >
          <h4>Delete Task</h4>
        </Button>
      </div>
    );
  }
}
export default withRouter(TendTask);