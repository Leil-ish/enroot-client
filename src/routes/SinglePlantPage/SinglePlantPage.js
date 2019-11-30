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
        {plant.description}
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
