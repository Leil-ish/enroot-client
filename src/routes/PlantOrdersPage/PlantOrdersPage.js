import React from 'react'
import {Section} from '../../components/Utils/Utils'
import {Link} from 'react-router-dom'
import PlantContext from '../../contexts/PlantContext'
import TendOrder from '../../components/TendOrder/TendOrder'
import PlantApiService from '../../services/plant-api-service'
import './PlantOrdersPage.css'

export default class PlantOrdersPage extends React.Component {

  static contextType = PlantContext;

  static defaultProps ={
    match: { params: {} },
  }

  componentDidMount() {
    const {plantId} = this.props.match.params
    this.context.clearError()
    PlantApiService.getPlantOrders(plantId)
      .then(this.context.setOrders)
      .catch(this.context.setError)
    PlantApiService.getPlant(plantId)
      .then(this.context.setPlant)
      .catch(this.context.setError)
    }

  componentWillUnmount() {
    this.context.clearOrder()
  }

  renderOrder() {
    const {plant, orders} = this.context
    console.log(this.context)

    if (orders.length===0) {
      return (
        <div className='PlantOrdersPage'>
        <h2>{plant.common_name}</h2>
        <hr/>

        <h3 className='Orders-subtitle'>No Orders Yet</h3>
        <hr/>
        <br/>
          <Link
              to={`/garden/${plant.id}/add-order`}
              type='button'
              className='Add-plant-order-button'
            >
            <p>Add Order</p>
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
        <div className='PlantOrdersPage'>
          <h2>{plant.title}</h2>
          <h3 className='Orders-subtitle'>Orders</h3>
          <ul className='PlantOrdersPage_order-list'>
            <li>
              {orders.map(order =>
                <TendOrder
                  key={order.maintenance_needed + 'key'}
                  maintenance_needed={order.maintenance_needed}
                  frequency={order.frequency}
                  details={order.details}
                  onDeleteOrder={this.handleDeleteOrder}
                  order={order}
                  plant={plant}
                  {...order}
                />
              )}
              </li>
            </ul>
            <Link
                to={`/garden/${plant.id}/add-order`}
                type='button'
                className='Add-plant-order-button'
              >
              <p>Add Order</p>
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
    const { error, orders } = this.context
    let content
    if (error) {
      content = (error.error === `Plant doesn't exist`)
        ? <p className='red'>Order not found</p>
        : <p className='red'>There was an error</p>
    } else if (!orders) {
      content = <div className='loading' />
    } else {
      content = this.renderOrder()
    }
    return (
      <Section className='OrderPage'>
        {content}
      </Section>
    )
  }
}
