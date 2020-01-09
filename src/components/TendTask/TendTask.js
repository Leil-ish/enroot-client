import React, {Component} from 'react';
import {Button} from '../Utils/Utils'
import GardenContext from '../../contexts/GardenContext'
import {withRouter, Link} from 'react-router-dom';
import TokenService from '../../services/token-service'
import config from '../../config'
import './TendTask.css'

class TendTask extends Component {

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

    const {plantId, taskId} = this.props
    
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
    console.log(task)
    const {plantId} = this.props

    return (
      <div className = 'single-task'>
            <hr/>
            <h3>Task for&nbsp;
              <Link className='plant-link'
                to={`/garden/${plantId}`}
              >{task.plant_common_name}
              </Link>:
            </h3>
            <hr/>
            <p>Task: {task.maintenance_needed}</p>
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
TendTask.contextType = GardenContext;