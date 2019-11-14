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
          <div className='field'>
            <label htmlFor='plant-author-input'>
              Author
            </label>
            <input type='text' id='plant-author-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-categories-input'>
              Genre 
            </label>
            <input type='text' id='plant-categories-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-description-input'>
              Synopsis
            </label>
            <textarea id='plant-description-input' />
          </div>
          <div className='select-input'>
            <label htmlFor='plant-rating-input'>
              Rating
            </label>
            <select id='plant-rating-input'>
                <option value="1">1 &#9733;</option>
                <option value="2">2 &#9733;</option>
                <option value="3">3 &#9733;</option>
                <option value="4">4 &#9733;</option>
                <option value="5">5 &#9733;</option>
            </select>
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