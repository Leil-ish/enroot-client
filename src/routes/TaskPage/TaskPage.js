import React from 'react'
import {Section} from '../../components/Utils/Utils'
import GardenContext from '../../contexts/GardenContext'
import TaskResults from '../../components/TaskResults/TaskResults'
import TaskFilters from '../../components/Filters/TaskFilters'
import PlantApiService from '../../services/plant-api-service'
import './TaskPage.css'

export default class TaskPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        plants:[],
        error: false,
        property: "plant_common_name",
    };
  }

  static contextType = GardenContext;

  static defaultProps ={
    match: { params: {} },
    history: {
      push: () => {},
    },
  }

  handleTaskSort(property) {
    this.setState({
      property: property
    })
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

      return (
        <div className='TasksPage'>
          <h2 className='Tasks-subtitle'>Tasks for All Plants</h2>
          <TaskFilters 
                onTaskSort={property => this.handleTaskSort(property)}/>
          <hr/>
          <ul className='TasksPage_task-list'>
          <li>
              <TaskResults 
                tasks={this.context.tasks} 
                onDeleteTask={this.handleDeleteTask}
                property={this.state.property}/>
            </li>
            </ul>
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
