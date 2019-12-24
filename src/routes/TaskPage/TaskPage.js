import React from 'react'
import {Section} from '../../components/Utils/Utils'
import {Link} from 'react-router-dom'
import GardenContext from '../../contexts/GardenContext'
import TendTask from '../../components/TendTask/TendTask'
import PlantApiService from '../../services/plant-api-service'
import './TaskPage.css'

export default class TaskPage extends React.Component {

  static contextType = GardenContext;

  static defaultProps ={
    match: { params: {} },
    history: {
      push: () => {},
    },
  }

  componentDidMount() {
    this.context.clearError()
    PlantApiService.getAllTasks()
      .then(this.context.setTaskList)
      .catch(this.context.setError)
    PlantApiService.getPlants()
      .then(this.context.setGarden)
      .catch(this.context.setError)
    }

  renderTask() {
    const {tasks} = this.context
    console.log (tasks)

      return (
        <div className='PlantTasksPage'>
          <h3 className='Tasks-subtitle'>Tasks</h3>
          <ul className='PlantTasksPage_task-list'>
            <li>
              {tasks.map(task =>
                <TendTask
                  key={task.details + 'key'}
                  taskId={task.id}
                  plantId={task.plant_id}
                  maintenance_needed={task.maintenance_needed}
                  frequency={task.frequency}
                  details={task.details}
                  onDeleteTask={this.handleDeleteTask}
                  task={task}
                  {...task}
                />
              )}
              </li>
            </ul>
            <Link
              to={`/garden`}
              type='button'
              className='Garden-button'
            >
            <p>Back to Garden View</p>
          </Link> 
        </div>
      ) 
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
