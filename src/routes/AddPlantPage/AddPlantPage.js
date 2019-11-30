import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Form from '../../components/Form/Form'
import PlantContext from '../../contexts/PlantContext'
import PlantApiService from '../../services/plant-api-service'
import {Button, Input} from '../../components/Utils/Utils';
import './AddPlantPage.css'

class AddPlantPage extends Component {
  
  static defaultProps = {
    match: { params: {} },
    onSavePlantSuccess: () => {},
  }

  static contextType = PlantContext

  handleSubmit = ev => {
    ev.preventDefault()
    const {common_name, scientific_names, description, categories} = ev.target
    PlantApiService.postCustomPlant(common_name.value, scientific_names.value, description.value, categories.value)
      .then(this.context.addPlant)
      .then(() => {
        common_name.value = ''
        scientific_names.value = ''
        description.value = ''
        categories.value = ''
      })
      .then(() => {
        this.props.onSavePlantSuccess()
        this.props.history.push(`/garden`)
      })
      .catch(this.context.setError)
  }

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
            <Input type='text' id='plant-common-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-scientific-name-input'>
              Scientific Name
            </label>
            <input type='text' id='plant-scientific-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-flower-color-Input'>
              Flower Color
            </label>
            <Input type='text' id='plant-flower-color-Input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-seedling-vigor-Input'>
              Seedling Vigor
            </label>
            <Input type='text' id='plant-seedling-vigor-Input' />
          </div>
          <div className='field'>
            <label htmlFor='plant-shade-tolerance-Input'>
              Shade Tolerance
            </label>
            <Input type='text' id='plant-shade-tolerance-Input' />
          </div>
          <br/>          
          <br/>
          <div className='buttons'>
            <Button
                type='submit'
                className='Add-plant-button'
              >
                Add plant to Garden
            </Button>
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

export default withRouter(AddPlantPage)