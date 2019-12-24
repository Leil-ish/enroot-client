import React from 'react'
import {Section} from '../../components/Utils/Utils'
import {Link} from 'react-router-dom'
import PlantContext from '../../contexts/PlantContext'
import TendTask from '../../components/TendTask/TendTask'
import PlantApiService from '../../services/plant-api-service'
import './PlantTasksPage.css'

export default class PlantTasksPage extends React.Component {

  static contextType = PlantContext;

  static defaultProps ={
    match: { params: {} },
  }

  componentDidMount() {
    const {plantId} = this.props.match.params
    this.context.clearError()
    PlantApiService.getPlantTasks(plantId)
      .then(this.context.setTasks)
      .catch(this.context.setError)
    PlantApiService.getPlant(plantId)
      .then(this.context.setPlant)
      .catch(this.context.setError)
    }

  componentWillUnmount() {
    this.context.clearTask()
  }

  renderTask() {
    const {plant, tasks} = this.context
    console.log(this.context)

    if (tasks.length===0) {
      return (
        <div className='PlantTasksPage'>
        <h2>{plant.common_name}</h2>
        <hr/>

        <h3 className='Tasks-subtitle'>No Tasks Yet</h3>
        <hr/>
        <br/>
          <Link
              to={`/garden/${plant.id}/add-task`}
              type='button'
              className='Add-plant-task-button'
            >
            <p>Add Task</p>
          </Link> 
          <Link
              to={`/garden/${plant.id}`}
              type='button'
              className='Back-to-plant-button'
            >
            <p>Back to Plant</p>
          </Link> 
      </div>
      )
    } else {
      return (
        <div className='PlantTasksPage'>
          <h2>{plant.title}</h2>
          <h3 className='Tasks-subtitle'>Tasks</h3>
          <ul className='PlantTasksPage_task-list'>
            <li>
              {tasks.map(task =>
                <TendTask
                  key={task.maintenance_needed + 'key'}
                  maintenance_needed={task.maintenance_needed}
                  frequency={task.frequency}
                  details={task.details}
                  onDeleteTask={this.handleDeleteTask}
                  task={task}
                  plant={plant}
                  {...task}
                />
              )}
              </li>
            </ul>
            <Link
                to={`/garden/${plant.id}/add-task`}
                type='button'
                className='Add-plant-task-button'
              >
              <p>Add Task</p>
            </Link> 
            <Link
                to={`/garden/${plant.id}`}
                type='button'
                className='Back-to-plant-button'
              >
              <p>Back to Plant</p>
            </Link> 
        </div>
      ) 
    }
  }

  render() {
    const { error, tasks } = this.context
    let content
    if (error) {
      content = (error.error === `Plant doesn't exist`)
        ? <p className='red'>Task not found</p>
        : <p className='red'>There was an error</p>
    } else if (!tasks) {
      content = <div className='loading' />
    } else {
      content = this.renderTask()
    }
    return (
      <Section className='TaskPage'>
        {content}
      </Section>
    )
  }
}
