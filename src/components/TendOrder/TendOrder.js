import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './TendOrder.css'

class TendOrder extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    let {common_name, scientific_name, order_name, order_content, gardenId} = this.props
    console.log(this.props)

    return (
        <ul className = 'single-order'>
            <Link
              to={`/orders/${gardenId}`}
              type='button'
              className='Add-order-button'>
                <h2>Order for: <i>{common_name}</i></h2>
              </Link>
            <h3>{scientific_name}</h3>
            <h3>{order_name}</h3>
            <p>{order_content}</p>

            <Link
                to={`/garden/${gardenId}/add-order`}
                type='button'
                className='Add-order-button'
              >
            Add a New Order for <i>{common_name}</i>
            </Link>
        </ul>
    );
  }
}

export default TendOrder;