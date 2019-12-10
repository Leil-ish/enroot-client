import React, {Component} from 'react';
import {Button} from '../Utils/Utils'
import PlantContext from '../../contexts/PlantContext';
import TokenService from '../../services/token-service'
import config from '../../config'
import './TendOrder.css'

class TendOrder extends Component {

  static contextType = PlantContext;

  static defaultProps ={
    onDeleteOrder: () => {},
    match: { params: {} },
  }

  //Delete for order
  handleClickDelete = e => {
    e.preventDefault()

    const plantId = this.props.id
    const orderId = this.props.order.order_id
    const plant = this.props
    
    fetch (`${config.API_ENDPOINT}/garden/${plantId}/orders/${orderId}`, {
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
        this.context.deleteOrder(orderId)
        this.props.onDeleteOrder(orderId)
      })
      .then(() => {
        this.props.history.push(`/garden/${plant.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    let {maintenance_needed, frequency, details} = this.props

    return (
      <div className = 'single-order'>
            <h3 className='Single_maintenance_needed'>{maintenance_needed}</h3>
            <hr/>
            <h4>{frequency}</h4>
            <p>{details}</p>
        <Button
          className='Order_delete'
          type='button'
          //Confirmation of delete
          onClick={e =>
            window.confirm("Are you sure you wish to delete this item?") &&
            this.handleClickDelete(e)
          }
        >
          <h4>Delete Order</h4>
        </Button>
      </div>
    );
  }
}
export default TendOrder;