import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PlantContext from '../../contexts/PlantContext'
import PlantApiService from '../../services/plant-api-service'
import {Section} from '../../components/Utils/Utils'
import Form from '../../components/Form/Form'
import './SinglePlantPage.css'

export default class SinglePlantPage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = PlantContext

  componentDidMount() {
    const { plantId } = this.props.match.params
    this.context.clearError()
    PlantApiService.getPlant(plantId)
      .then(this.context.setPlant)
      .catch(this.context.setError)
    PlantApiService.getPlantTasks(plantId)
      .then(this.context.setTasks)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearPlant()
  }

  renderPlant() {
    const {plant} = this.context
    return <>
      <PlantContent plant={plant} />
      <Form />
    </>
  }

  render() {
    const { error, plant } = this.context
    let content
    if (error) {
      content = (error.error === `Plant doesn't exist`)
        ? <p className='red'>Plant not found</p>
        : <p className='red'>There was an error</p>
    } else if (!plant.id) {
      content = <div className='loading' />
    } else {
      content = this.renderPlant()
    }
    return (
      <Section className='PlantPage'>
        {content}
      </Section>
    )
  }
}

function PlantContent({ plant }) {
  return (
    <div className='PlantPage_content'>
      <h1 className='PlantPage_common_name'>
        {plant.common_name}
      </h1>
      <hr/>
      <p className='PlantPage_description'>
        <h2>Scientific Name:</h2>{plant.scientific_name}<br/>
        <h2>Common Name:</h2> {plant.common_name}<br/>
        <h2>Lifespan:</h2> {plant.lifespan}<br/>
        <h2>Growth Rate:</h2> {plant.growth_rate}<br/>
        <h2>Growth Period:</h2> {plant.growth_period}<br/>
        <h2>Temperature Minimum:</h2> {plant.temperature_minimum}<br/>
        <h2>Shade Tolerance:</h2> {plant.shade_tolerance}<br/>
        <h2>Precipitation Minimum:</h2> {plant.precipitation_minimum}<br/>
        <h2>Precipitation Maximum:</h2> {plant.precipitation_maximum}<br/>
        <h2>Resprout Ability:</h2> {plant.resprout_ability}<br/>
        <h2>Family Common Name:</h2> {plant.family_common_name}<br/>
        <h2>Duration:</h2> {plant.duration}<br/>
        <h2>Draught Tolerance:</h2> {plant.drought_tolerance}<br/>
        <h2>Frost-Free Days Minimum:</h2> {plant.frost_free_days_minimum}<br/>
        <h2>Moisture Use:</h2> {plant.moisture_use}<br/>
        <h2>Seedling Vigor:</h2> {plant.seedling_vigor}<br/>
        <h2>Flower Color:</h2> {plant.flower_color}<br/>
        <h2>Foliage Color:</h2> {plant.foliage_color}<br/>
      </p>
      <Link
              to={`/garden/${plant.id}/tasks`}
              type='button'
              className='Add-task-button'
            >
              View/Add Tasks
      </Link>
    </div>
  )
}
