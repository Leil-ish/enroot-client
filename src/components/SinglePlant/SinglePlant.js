import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './SinglePlant.css'

class SinglePlant extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {

    let {common_name, scientific_name, flower_color, seedling_vigor, shade_tolerance} = this.props

      const {gardenId} = this.props
    
      return (
          <div className = 'single-plant'>
            <ul>
              <h3>Common Name: {common_name}</h3>
              <h4>Scientific Name: {scientific_name}</h4>
              <p>Flower Color: {flower_color}</p>
              <p>Seedling Vigor: {seedling_vigor}</p>
              <p>Shade Tolerance: {shade_tolerance}</p>
              <div className='buttons'>
              <Link
                to={`/garden/${gardenId}/add-order`}
                type='button'
                className='Plant-add-order-button'
              >
                Add a tend order to this plant
              </Link>
              <Link
                to={`/tend-orders/${gardenId}`}
                type='button'
                className='Plant-view-orders-button'
              >
                View orders for this plant
              </Link>
            </div>
          </ul>
        </div>
      );
  }
}

export default SinglePlant;