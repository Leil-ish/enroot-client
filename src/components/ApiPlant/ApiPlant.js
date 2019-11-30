import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {Button} from '../../components/Utils/Utils'
import PlantApiService from '../../services/plant-api-service'
import PlantContext from '../../contexts/PlantContext'
import Form from '../../components/Form/Form'
import './ApiPlant.css'

class ApiPlant extends Component {

  static defaultProps = {
    onSavePlantSuccess: () => {},
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

  static contextType = PlantContext

  handleSubmit = ev => {
    ev.preventDefault()
    PlantApiService.postPlant(
      this.props.scientific_name || '',
      this.props.common_name || '',
      this.props.lifespan || '',
      this.props.growth_rate || '',
      this.props.growth_period || '',
      this.props.temperature_minimum || '', 
      this.props.shade_tolerance || '',
      this.props.precipitation_minimum || '',
      this.props.precipitation_maximum || '',
      this.props.resprout_ability || '',
      this.props.family_common_name || '',
      this.props.duration || '', 
      this.props.drought_tolerance || '',
      this.props.frost_free_days_minimum || '',
      this.props.moisture_use || '',
      this.props.seedling_vigor || '',
      this.props.flower_color || '',
      this.props.foliage_color || '',     
    )
    .then(this.context.addPlant)
    .then(() => {
      this.props.onSavePlantSuccess()
      this.props.history.push(`/garden`)
    })
      .catch(this.context.setError)
  }

  render() {
    
    let common_name;
    if (this.props.common_name) {
      common_name = this.props.common_name;
    }
    else (
      common_name = "No common name listed"
    )

    let scientific_name;
    if (this.props.scientific_name) {
      scientific_name = this.props.scientific_name;
    }
    else (
      scientific_name = "No scientific name listed."
    )

    let full_plant_stats = this.props.plant;


    return (
      <ul className = 'api-plant'>
          <li><h3>{common_name}</h3></li>
          <li><h4>{scientific_name}</h4></li>
          <li><h5>{this.props.flower_color}</h5></li>
          <li><hr/></li>
          <li><div onClick={(e)=>this.togglePanel(e)} className = 'collapsible'>
              <p className='Description-button'>Description</p>
              {this.state.open ? (
                <div className='api-plant-content'>
                  <p>{full_plant_stats}</p>
                </div>) : null}
            </div></li>
            <li><Form 
              className='AddPlantButton'
              onSubmit={this.handleSubmit}>
                <Button
                  type='submit'
                  className='Add-plant-button'
                >
                  Add Plant to Garden
                </Button>
            </Form></li>
      </ul>
    );
  }
}

export default withRouter(ApiPlant);