import React from 'react'
import TendOrder from '../../components/TendOrder/TendOrder'
import ApiContext from '../../contexts/ApiContext'
import './TendPage.css'

export default class TendPage extends React.Component {

  static defaultProps = {
    plants: [],
    orders: []
  }
  
  static contextType = ApiContext;
  
  render() {
    return (
      <section className='TendPage'>
        <ul>
          {this.context.orders.map(order =>
            <li key={order.gardenId}>
              <TendOrder
                order_id={order.order_id}
                common_name={order.common_name}
                scientific_name={order.scientific_name}
                order_name={order.order_name}
                order_content={order.order_content}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}
