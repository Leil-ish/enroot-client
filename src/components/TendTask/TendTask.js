import React, {Component} from 'react';
import {Button} from '../Utils/Utils'
import GardenContext from '../../contexts/GardenContext'
import {withRouter} from 'react-router-dom';
import PlantApiService from '../../services/plant-api-service'
import TokenService from '../../services/token-service'
import config from '../../config'
import './TendTask.css'

class TendTask extends Component {

  static contextType = GardenContext;

  static defaultProps ={
    onDeleteTask: () => {},
    match: { params: {} },
    history: {
      push: () => {},
    },
  }

  //Delete for task
  handleClickDelete = e => {
    e.preventDefault()

    const plantId = this.props.plant_id
    const taskId = this.props.id
    
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
        this.props.history.push(`/garden/${plantId}/tasks`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    let {task} = this.props

    return (
      <div className = 'single-task'>
            <hr/>
            <h4 className='Single_maintenance_needed'>Maintenance Needed for </h4>
            <h3>{task.plant_common_name}: </h3>
            <p>{task.maintenance_needed}</p>
            <hr/>
            <p>Frequency: {task.frequency}</p>
            <p>Details: {task.details}</p>
        <Button
          className='Task_delete'
          type='button'
          //Confirmation of delete
          onClick={e =>
            window.confirm("Are you sure you wish to delete this item?") &&
            this.handleClickDelete(e)
          }
        >
          <h4>Delete</h4>
        </Button>
      </div>
    );
  }
}
export default withRouter(TendTask);