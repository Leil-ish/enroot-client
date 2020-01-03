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
      <div className='PlantPage_description'>
        <p>Scientific Name: {plant.scientific_name}</p>
        <p>Common Name: {plant.common_name}</p>
        <p>Lifespan: {plant.lifespan}</p>
        <p>Growth Rate: {plant.growth_rate}</p>
        <p>Growth Period: {plant.growth_period}</p>
        <p>Temperature Minimum: {plant.temperature_minimum}</p>
        <p>Shade Tolerance: {plant.shade_tolerance}</p>
        <p>Precipitation Minimum: {plant.precipitation_minimum}</p>
        <p>Precipitation Maximum: {plant.precipitation_maximum}</p>
        <p>Resprout Ability: {plant.resprout_ability}</p>
        <p>Family Common Name: {plant.family_common_name}</p>
        <p>Duration: {plant.duration}</p>
        <p>Draught Tolerance: {plant.drought_tolerance}</p>
        <p>Frost-Free Days Minimum: {plant.frost_free_days_minimum}</p>
        <p>Moisture Use: {plant.moisture_use}</p>
        <p>Seedling Vigor: {plant.seedling_vigor}</p>
        <p>Flower Color: {plant.flower_color}</p>
        <p>Foliage Color: {plant.foliage_color}</p>
      </div>
      <hr/>
      <Link
              to={`/garden/${plant.id}/tasks`}
              type='button'
              className='Add-task-button'
            >
              View/Add Tasks
      </Link>
      <Link
              to={`/garden/${plant.id}/edit-plant`}
              type='button'
              className='Add-task-button'
            >
              Add More Plant Info
      </Link>
    </div>
  )
}
