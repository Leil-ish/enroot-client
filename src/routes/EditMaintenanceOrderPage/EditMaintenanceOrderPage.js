import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/Form/Form'
import ApiContext from '../../contexts/ApiContext'
import {findPlant} from '../../garden-helper'
import './EditMaintenanceOrderPage.css'

export default class EditMaintenanceOrderPage extends Component {
  static defaultProps = {
    plants: [],
    notes: []
  }
  static contextType = ApiContext;

  render() {
    const {plants} = this.context
    const {gardenId} = this.props.match.params
    const plant = findPlant(plants, gardenId) || {content: ''}
    return (
      <section className='EditMaintenanceOrderPage'>
        <h2>
          Add Note for {plant.name}
        </h2>
        <Form>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input type='text' id='note-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea id='note-content-input' />
          </div>
          <div className='buttons'>
            <Link
              to='/notes'
              type='button'
              className='Add-note-button'
            >
            <br />
              Add Note
            </Link>
            <Link
              to='/garden'
              type='button'
              className='Cancel-add-note-button'
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