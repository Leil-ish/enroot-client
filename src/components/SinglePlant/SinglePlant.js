import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Utils/Utils'
import GardenContext from '../../contexts/GardenContext';
import TokenService from '../../services/token-service'
import TendTask from '../TendTask/TendTask'
import PlantApiService from '../../services/plant-api-service'
import config from '../../config'
import './SinglePlant.css'

class SinglePlant extends Component {

  static contextType = GardenContext;

  state = {
    plant: []
  }

  componentDidMount() {
    const {id} = this.props
    console.log(id)
    this.context.clearError()
    PlantApiService.getPlantTasks(id)
      .then(this.context.setTasks)
      .catch(this.context.setError)
    }

  componentWillUnmount() {
    this.context.clearTask()
  }

  static defaultProps ={
    onDeletePlant: () => {},
    match: { params: {} },
  }

  constructor(props){
    super(props);
      this.state = {
        open: false
      }
      this.togglePanel = this.togglePanel.bind(this);
    }

  //Collapsible for the plant description
  togglePanel(e){
    this.setState({open: !this.state.open})
    }

  handleClickPlantDelete = e => {
    e.preventDefault()

    const plantId = this.props.id
    
    fetch (`${config.API_ENDPOINT}/garden/${plantId}`, {
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
        this.context.deletePlant(plantId)
        this.props.onDeletePlant(plantId)
      })
      .then(() => {
        this.props.history.push(`/garden`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    let {id, scientific_name, common_name, lifespan, growth_rate, growth_period, 
      temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
      resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
      moisture_use, seedling_vigor, flower_color, foliage_color} = this.props
    let {tasks} = this.context;
    console.log(tasks)

      return (
          <div className = 'single-plant'>
            <ul>
              <h3>Common Name: {common_name}</h3>
              <hr/>
                <div onClick={(e)=>this.togglePanel(e)} className = 'collapsible'>
                    <p className='Details-button'>Details</p>
                    {this.state.open ? (
                      <div className='api-plant-content'>
                        <h4>Scientific Name: {scientific_name}</h4>
                        <p>
                        Common Name: {common_name}<br/>
                        Lifespan: {lifespan}<br/>
                        Growth Rate: {growth_rate}<br/>
                        Growth Period: {growth_period}<br/>
                        Temperature Minimum: {temperature_minimum}<br/>
                        Shade Tolerance: {shade_tolerance}<br/>
                        Precipitation Minimum: {precipitation_minimum}<br/>
                        Precipitation Maximum: {precipitation_maximum}<br/>
                        Resprout Ability: {resprout_ability}<br/>
                        Family Common Name: {family_common_name}<br/>
                        Duration: {duration}<br/>
                        Draught Tolerance: {drought_tolerance}<br/>
                        Frost-Free Days Minimum: {frost_free_days_minimum}<br/>
                        Moisture Use: {moisture_use}<br/>
                        Seedling Vigor: {seedling_vigor}<br/>
                        Flower Color: {flower_color}<br/>
                        Foliage Color: {foliage_color}<br/>
                        </p>
                        <div className='task-content'>
                        <ul className='GardenPage_task-list'>
                          <li>
                            {tasks.map(task =>
                              <TendTask
                                key={task.maintenance_needed + 'key'}
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
                      </div>
                        <div className='buttons'>
                        <Link
                          to={`/garden/${id}/edit-plant`}
                          type='button'
                          className='Plant-edit-button'
                        >
                          Add More Information About this Plant
                        </Link>
                        <Link
                          to={`/garden/${id}/tasks`}
                          type='button'
                          className='Plant-view-tasks-button'
                        >
                          View Task Page for this Plant
                        </Link>
                        <Button
                            className='Plant-remove-button'
                            type='button'
                            onClick={e =>
                              window.confirm("Are you sure you wish to remove this plant? Tasks associated with the plant will be deleted also.") &&
                              this.handleClickPlantDelete(e)
                          }>
                          Remove Plant
                        </Button>
                      </div>
                    <p className='Tasks'>Tasks</p>
                    </div>) : null}
                </div>      
          </ul>
        </div>
      );
  }
}

export default SinglePlant;