import React from 'react'
import {Section} from '../../components/Utils/Utils'
import {Link} from 'react-router-dom'
import GardenContext from '../../contexts/GardenContext'
import TendOrder from '../../components/TendOrder/TendOrder'
import PlantApiService from '../../services/plant-api-service'
import './TendPage.css'

export default class TendPage extends React.Component {

  static contextType = GardenContext;

  static defaultProps ={
    match: { params: {} },
  }

  componentDidMount() {
    this.context.clearError()
    PlantApiService.getAllOrders()
      .then(this.context.setOrderList)
      .catch(this.context.setError)
    PlantApiService.getPlants()
      .then(this.context.setGarden)
      .catch(this.context.setError)
    }

  renderOrder() {
    const {orders, plants} = this.context
    console.log (orders)
    console.log (plants)

      return (
        <div className='PlantOrdersPage'>
          <h3 className='Orders-subtitle'>Orders</h3>
          <ul className='PlantOrdersPage_order-list'>
            <li>
              {orders.map(order =>
                <TendOrder
                  key={order.details + 'key'}
                  orderId={order.id}
                  plantId={order.plant_id}
                  maintenance_needed={order.maintenance_needed}
                  frequency={order.frequency}
                  details={order.details}
                  onDeleteOrder={this.handleDeleteOrder}
                  {...order}
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
