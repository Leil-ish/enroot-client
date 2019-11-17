import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import ApiContext from '../../contexts/ApiContext'
import './AddPlantPage.css'

export default class AddPlantPage extends Component {
  static defaultProps = {
    plants: [],
    notes: []
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
            <label htmlFor='plant-name-input'>
              Name
            </label>
            <input type='text' id='plant-name-input' />
          </div>
          <br/>          
          <br/>
          <div className='buttons'>
            <Link
              to='/garden'
              type='button'
              className='Add-plant-button'
            >
            <br />
              Add Plant
            </Link>
            <Link
              to='/find-plant'
              type='button'
              className='Cancel-add-plant-button'
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