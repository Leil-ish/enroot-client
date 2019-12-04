import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Utils/Utils'
import GardenContext from '../../contexts/GardenContext';
import TokenService from '../../services/token-service'
import config from '../../config'
import './SinglePlant.css'

class SinglePlant extends Component {

  static contextType = GardenContext;

  state = {
    plant: []
  }

  static defaultProps ={
    onDeletePlant: () => {},
    match: { params: {} },
  }

  handleClickPlantDelete = e => {
    e.preventDefault()

    const plantId = this.props.id
    
    fetch (`${config.API_ENDPOINT}/garden/${plantId}`, {
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
        this.context.deletePlant(plantId)
        this.props.onDeletePlant(plantId)
      })
      .then(() => {
        this.props.history.push(`/garden`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    let {id, common_name, scientific_name, flower_color, seedling_vigor, shade_tolerance} = this.props

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
                to={`/garden/${id}/add-order`}
                type='button'
                className='Plant-add-order-button'
              >
                Add a tend order to this plant
              </Link>
              <Link
                to={`/garden/${id}/orders`}
                type='button'
                className='Plant-view-orders-button'
              >
                View orders for this plant
              </Link>
              <Button
                  className='Plant-remove-button'
                  type='button'
                  onClick={e =>
                    window.confirm("Are you sure you wish to remove this plant? Orders associated with the plant will be deleted also.") &&
                    this.handleClickPlantDelete(e)
                }>
                Remove Plant
              </Button>
            </div>
          </ul>
        </div>
      );
  }
}

export default SinglePlant;