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
    PlantApiService.getPlantOrders(plantId)
      .then(this.context.setOrders)
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
        Scientific Name: {plant.scientific_name}<br/>
        Common Name: {plant.common_name}<br/>
        Lifespan: {plant.lifespan}<br/>
        Growth Rate: {plant.growth_rate}<br/>
        Growth Period: {plant.growth_period}<br/>
        Temperature Minimum: {plant.temperature_minimum}<br/>
        Shade Tolerance: {plant.shade_tolerance}<br/>
        Precipitation Minimum: {plant.precipitation_minimum}<br/>
        Precipitation Maximum: {plant.precipitation_maximum}<br/>
        Resprout Ability: {plant.resprout_ability}<br/>
        Family Common Name: {plant.family_common_name}<br/>
        Duration: {plant.duration}<br/>
        Draught Tolerance: {plant.drought_tolerance}<br/>
        Frost-Free Days Minimum: {plant.frost_free_days_minimum}<br/>
        Moisture Use: {plant.moisture_use}<br/>
        Seedling Vigor: {plant.seedling_vigor}<br/>
        Flower Color: {plant.flower_color}<br/>
        Foliage Color: {plant.foliage_color}<br/>
      </p>
      <Link
              to={`/garden/${plant.id}/orders`}
              type='button'
              className='Add-order-button'
            >
              View/Add Orders
      </Link>
    </div>
  )
}
