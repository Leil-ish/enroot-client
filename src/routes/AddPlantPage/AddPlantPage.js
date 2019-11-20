import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import ApiContext from '../../contexts/ApiContext'
import './AddPlantPage.css'

export default class AddPlantPage extends Component {
  static defaultProps = {
    plants: [],
    orders: []
  }
  static contextType = ApiContext;

  render() {

    return (
      <section className='AddPlantPage'>
        <h2>
          Add a Plant to Your Garden
        </h2>
        <Form>
          <div className='field'>
            <label htmlFor='plant-common-name-input'>
              Common Name
            </label>
            <input type='text' id='plant-common-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-scientific-name-input'>
              Scientific Name
            </label>
            <input type='text' id='plant-scientific-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-flower-color-input'>
              Flower Color
            </label>
            <input type='text' id='plant-flower-color-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-seedling-vigor-input'>
              Seedling Vigor
            </label>
            <input type='text' id='plant-seedling-vigor-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-shade-tolerance-input'>
              Shade Tolerance
            </label>
            <input type='text' id='plant-shade-tolerance-input' />
          </div>
          <br/>          
          <br/>
          <div className='buttons'>
            <Link
              to='/garden'
              type='button'
              className='Add-plant-button'
            >
              Add Plant
            </Link>
            <Link
              to='/find-plant'
              type='button'
              className='Cancel-add-plant-button'
            >
              Cancel
            </Link>
          </div>
        </Form>
      </section>
    )
  }
}