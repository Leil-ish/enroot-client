import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Utils/Utils'
import GardenContext from '../../contexts/GardenContext';
import TokenService from '../../services/token-service'
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

    let {id} = this.props;
    let {scientific_name, lifespan, growth_rate, growth_period, 
      temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
      resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
      moisture_use, seedling_vigor, flower_color, foliage_color} = this.props;
    
    if (scientific_name.length===0) {
      scientific_name = 'Scientific name not yet added.';
    } else {
      scientific_name = this.props.scientific_name;
    }

    if (lifespan.length===0) {
      lifespan = 'Lifespan not yet added.';
    } else {
      lifespan = this.props.lifespan;
    }

    if (growth_rate.length===0) {
      growth_rate = 'Growth rate not yet added.';
    } else {
      growth_rate = this.props.growth_rate;
    }

    if (growth_period.length===0) {
      growth_period = 'Growth period not yet added.';
    } else {
      growth_period = this.props.growth_period;
    }

    if (temperature_minimum.length===0) {
      temperature_minimum = 'Minimum temperature not yet added.';
    } else {
      temperature_minimum = this.props.temperature_minimum;
    }

    if (shade_tolerance.length===0) {
      shade_tolerance = 'Shade tolerance not yet added.';
    } else {
      shade_tolerance = this.props.shade_tolerance;
    }

    if (precipitation_minimum.length===0) {
      precipitation_minimum = 'Minimum precipitation not yet added.';
    } else {
      precipitation_minimum = this.props.precipitation_minimum;
    }

    if (precipitation_maximum.length===0) {
      precipitation_maximum = 'Maximum precipitation not yet added.';
    } else {
      precipitation_maximum = this.props.precipitation_maximum;
    }

    if (resprout_ability.length===0) {
      resprout_ability = 'Resprout ability not yet added.';
    } else {
      resprout_ability = this.props.resprout_ability;
    }

    if (family_common_name.length===0) {
      family_common_name = 'Family common name not yet added.';
    } else {
      family_common_name = this.props.family_common_name;
    }

    if (duration.length===0) {
      duration = 'Duration not yet added.';
    } else {
      duration = this.props.duration;
    }

    if (drought_tolerance.length===0) {
      drought_tolerance = 'Draught tolerance not yet added.';
    } else {
      drought_tolerance = this.props.drought_tolerance;
    }

    if (frost_free_days_minimum.length===0) {
      frost_free_days_minimum = 'Frost-free days minimum not yet added.';
    } else {
      frost_free_days_minimum = this.props.frost_free_days_minimum;
    }

    if (moisture_use.length===0) {
      moisture_use = 'Moisture use not yet added.';
    } else {
      moisture_use = this.props.moisture_use;
    }

    if (seedling_vigor.length===0) {
      seedling_vigor = 'Seedling vigor not yet added.';
    } else {
      seedling_vigor = this.props.seedling_vigor;
    }

    if (flower_color.length===0) {
      flower_color = 'Flower color not yet added.';
    } else {
      flower_color = this.props.flower_color;
    }

    if (foliage_color.length===0) {
      foliage_color = 'Lifespan not yet added.';
    } else {
      foliage_color = this.props.foliage_color;
    }

      return (
          <div className = 'single-plant'>
            <ul>
              <h3>{this.props.common_name}</h3>
              <hr/>
                <div onClick={(e)=>this.togglePanel(e)} className = 'collapsible'>
                    <p className='Details-button'>Details</p><hr/>
                    {this.state.open ? (
                      <div className='single-plant-content'>

                        <h4>Scientific Name:</h4> <p>{scientific_name}</p><hr/>
                        <h4>Lifespan:</h4> <p>{lifespan}</p><hr/>
                        <h4>Growth Rate:</h4> <p>{growth_rate}</p><hr/>
                        <h4>Growth Period:</h4> <p>{growth_period}</p><hr/>
                        <h4>Temperature Minimum:</h4><p> {temperature_minimum}</p><hr/>
                        <h4>Shade Tolerance:</h4> <p>{shade_tolerance}</p><hr/>
                        <h4>Precipitation Minimum:</h4> <p>{precipitation_minimum}</p><hr/>
                        <h4>Precipitation Maximum:</h4> <p>{precipitation_maximum}</p><hr/>
                        <h4>Resprout Ability:</h4> <p>{resprout_ability}</p><hr/>
                        <h4>Family Name:</h4> <p>{family_common_name}</p><hr/>
                        <h4>Duration:</h4> <p>{duration}</p><hr/>
                        <h4>Draught Tolerance:</h4> <p>{drought_tolerance}</p><hr/>
                        <h4>Frost-Free Days Minimum:</h4> <p>{frost_free_days_minimum}</p><hr/>
                        <h4>Moisture Use:</h4> <p>{moisture_use}</p><hr/>
                        <h4>Seedling Vigor:</h4> <p>{seedling_vigor}</p><hr/>
                        <h4>Flower Color:</h4> <p>{flower_color}</p><hr/>
                        <h4>Foliage Color:</h4><p> {foliage_color}</p><hr/>
                        <div className='buttons'>
                        <Link
                          to={`/garden/${id}/edit-plant`}
                          type='button'
                          className='Plant-edit-button'
                        >
                          Add More Info
                        </Link>
                        <Link
                          to={`/garden/${id}/tasks`}
                          type='button'
                          className='Plant-view-tasks-button'
                        >
                          View Tasks
                        </Link>
                        <Button
                            className='Plant-remove-button'
                            type='button'
                            onClick={e =>
                              window.confirm("Are you sure you wish to remove this plant? Tasks associated with the plant will be deleted also.") &&
                              this.handleClickPlantDelete(e)
                          }>
                          Remove
                        </Button>
                        <hr/>
                      </div>
                    </div>) : null}
                </div>      
          </ul>
        </div>
      );
  }
}

export default SinglePlant;