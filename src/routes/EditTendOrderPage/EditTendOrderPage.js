import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import ApiContext from '../../contexts/ApiContext'
import {findPlant} from '../../garden-helper'
import './EditTendOrderPage.css'

export default class EditTendOrderPage extends Component {
  static defaultProps = {
    plants: [],
    orders: []
  }
  static contextType = ApiContext;

  render() {
    const {plants} = this.context
    const {gardenId} = this.props.match.params
    const plant = findPlant(plants, gardenId) || {content: ''}
    return (
      <section className='EditTendOrderPage'>
        <h2>
          Add Order for {plant.name}
        </h2>
        <Form>
          <div className='field'>
            <label htmlFor='order-name-input'>
              Name
            </label>
            <input type='text' id='order-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='order-content-input'>
              Content
            </label>
            <textarea id='order-content-input' />
          </div>
          <div className='buttons'>
            <Link
              to='/tend-orders'
              type='button'
              className='Add-order-button'
            >
            <br />
            
              Add Tend Order
            </Link>
            <Link
              to='/garden'
              type='button'
              className='Cancel-add-order-button'
            >
            <br />
              Cancel
            </Link>
          </div>
        </Form>
      </section>
    )
  }
}